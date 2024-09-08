import { NextResponse } from "next/server";

const BASE_URL = "https://us1.locationiq.com/v1/search?";
const TOMTOM_PLACE_KEY = process.env.TOMTOM_PLACE_KEY;  // LocationIQ API key
const SERPAPI_KEY = process.env.SERPAPI_KEY;        // SerpAPI key

export async function GET(request: any) {
    const { searchParams }: any = new URL(request.url);
    const q = searchParams.get('q');  // User query
    const locationIqApiUrl = `${BASE_URL}key=${TOMTOM_PLACE_KEY}&q=${encodeURIComponent(q)}&format=json`;

    // Fetch location data from LocationIQ API
    const locationIqRes = await fetch(locationIqApiUrl, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const places = await locationIqRes.json();

    // Get images from SerpAPI for each place
    const placesWithImages = await Promise.all(
        places.map(async (place: any) => {
            const serpApiUrl = `https://serpapi.com/search.json?engine=google_images&q=${encodeURIComponent(
                place.display_name
            )}&tbm=isch&api_key=${SERPAPI_KEY}`;

            const serpApiRes = await fetch(serpApiUrl);
            const serpApiData = await serpApiRes.json();

            // Add the first image URL from SerpAPI to the place data
            const imageUrl =
                serpApiData?.images_results?.[0]?.thumbnail || "/placeholder.png";

            return {
                ...place,
                imageUrl, // Add image URL to each place
            };
        })
    );

    // Send the enriched response back to the frontend
    return NextResponse.json({ resp: placesWithImages });
}
