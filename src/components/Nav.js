export default function Nav() {
    return (
<>
<div className="container mx-auto max-w-5xl">

    <div className="flex justify-between bg-red-800 sm:p-2">
        <div className="md:w-4/12 bg-red-800"></div>
        <div className="w-full md:w-8/12 justify-around flex font-medium flex-wrap md:flex-nowrap"> 
        <span className="text-white">HOME</span>
        <span className="text-white">BIOGRAPHY</span>
        <span className="text-white">BLOG</span>
        <span className="text-white">AREA WE SERVE</span>
         <span className="text-white">LIBRARY</span>
         <span className="text-white">CONTACT</span>
         </div>
    </div>
</div>
</>

    )}