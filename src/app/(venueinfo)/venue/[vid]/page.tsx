import getVenue from "@/libs/getVenue"
import Image from "next/image"
type PageProps = { params: { vid: string } }

export default async function VenueDetailPage({params}:{params:Promise<{vid:string}>}){
    const {vid} = await params

    const venueDetail = await getVenue(vid)

    return(
        <main className="text-center p-5">
            <div className="flex flex-row my-5 gap-5">
                <Image src={venueDetail.data.picture} alt="Car image"
                width={0} height={0} sizes="100vw" 
                className="rounded-lg w-[30%]">
                </Image>
                <div className="flex flex-col gap-1 items-start">
                    <p className="text-xl font-medium">{venueDetail.data.name}</p>
                    <div className="text-md font-medium font-sans">Address: {venueDetail.data.address}, {venueDetail.data.district}, {venueDetail.data.province}</div>
                    <div className="text-md font-medium font-sans">Tel: {venueDetail.data.tel}</div>
                    <div className="text-md font-medium font-sans">Daily Rate: {venueDetail.data.dailyrate}</div>
                </div>
                
            </div>
        </main>
    )
}

// export async function  generateStaticParams(){
//     return[{vid:'001'},{vid:'002'},{vid:'003'}]
// }