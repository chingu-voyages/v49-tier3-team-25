
interface Props {
    status: string;
}

const Status = ({status}: Props) => {
    const color = status === 'Confirmed' ? 'green':
                     status === 'Pending' ? 'amber':
                     status === 'Processing' ? 'blue':
                     status === 'Picked' ? 'indigo':
                     status === 'Shipped' ? 'purple':
                     status === 'Delivered' ? 'violet' : '';
    return (
        <span className={`inline-flex items-center py-0.5 px-2 rounded-md text-sm font-semibold bg-${color}-100 text-${color}-500`}>
            {status}
        </span>
    )
}

export default Status
