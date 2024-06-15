import httpStatus from "http-status";

import { User, Book } from "../models";

import { verifyToken, generateGenres } from "../helpers";
import { catchAsync } from "../utils";

export const getHomeDetails = catchAsync(async (req, res) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.slice(7);

    let decodedUser: any = null;
    try { decodedUser = token ? verifyToken(token) as any : null; } catch (error) {}
    
    const foundUser = await User.findById(decodedUser?._id).populate('wishlists carts');

    const wishlistCount = foundUser ? foundUser.wishlists.length: 0;
    const cartCount = foundUser ? foundUser.carts.length: 0;

    const excludeBookFields = '-stockQuantity -costPrice -createdBy -createdAt -updatedAt -sales';

    const [newArrivals, hotDealsBooks, trendingBooks, bestSellingBooks, exploreOurBooks] = await Promise.all([
        Book.find().sort({ createdAt: -1 }).limit(4).select(excludeBookFields),
        Book.find().sort({ discount: -1 }).limit(4).select(excludeBookFields),
        Book.find().sort({ createdAt: -1, sales: -1 }).limit(4).select(excludeBookFields),
        Book.find().sort({ sales: -1 }).limit(5).select(excludeBookFields),
        Book.aggregate([
            { $sample: { size: 5 } },
            { $project: { title: 1, author: 1, description: 1, imageUrls: 1, genres: 1, sku: 1, salePrice: 1, discount: 1, tags: 1 } }
        ])
    ]);

    const rawGenres = await Book.find().select('genres');
    const allGenres: string[] = rawGenres.flatMap(data => data.genres.map(genre => genre.toLowerCase()));
    const genres = generateGenres(allGenres, 7);
    
    const response = { 
        message: 'Get home details.',
        data: {
            isAuthenticated: !!decodedUser,
            badge: {
                wishlists: wishlistCount,
                carts: cartCount,
            },
            newArrivals,
            hotDealsBooks,
            trendingBooks,
            genres,
            bestSellingBooks,
            exploreOurBooks,
        }
    };

    res.status(httpStatus.OK).send(response);
})