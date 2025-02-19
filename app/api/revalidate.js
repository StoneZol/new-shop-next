export async function POST(req) {
    const { secret, path } = await req.json();
    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    try {
        await res.revalidate(path);
        return NextResponse.json({ message: `Revalidated: ${path}` });
    } catch (err) {
        return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
    }
}

