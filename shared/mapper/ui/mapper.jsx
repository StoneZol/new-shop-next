export default function Mapper({children, data, ...props}) {
    if (!data) return null;

  return (
    <div {...props}>
        {data.map((item, index) => (
            children(item, index)
        ))}
    </div>
  )
}
