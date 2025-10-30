import Link from "next/link";
export default function TopMenuItem({title,pageRef}:{title:string,pageRef:string}){
    return(
        <div>
            <Link href={pageRef} className="">
            {title}
            </Link>
        </div>
    );
}