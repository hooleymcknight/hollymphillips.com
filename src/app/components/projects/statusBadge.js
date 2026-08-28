export default function StatusBadge(props) {
    const status = typeof(props.status) == 'string' && props.status.trim().length > 0 ? props.status : null;
    const notes = typeof(props.notes) == 'string' && props.notes.trim().length > 0 ? props.notes : null;

    if (!status) return;

    return (
        <div className="max-w-[600px] w-full mx-auto mb-8">
            <span
                className="text-[22px] px-4 py-1 mr-4 rounded-[4px]"
                style={{ color: 'var(--background)', backgroundColor: 'var(--foreground)' }}
            >
                {status}
            </span>

            { notes ?
                <span className="text-[20px]">
                    {notes}
                </span>
            : '' }
        </div>
    );
}