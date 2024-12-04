function SortArrow(props) {
    return (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="24px"
        width="24px"
        {...props}
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M3 9l4-4 4 4M7 5v14M21 15l-4 4-4-4m4 4V5" />
      </svg>
    );
  }
  
  export default SortArrow;