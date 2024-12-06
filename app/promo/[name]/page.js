export default async function ActionPage({params}) {
    const resolvedParams = await params
    const {name}= resolvedParams
    return (
      <div>
        {name}
      </div>
    );
  }