

export default function NavBar(){
    return(
        <>
        <nav className='max-w-screen-xl my-0 mx-auto py-16 px-4'>
            <ul className="m-0 p-0 list-none flex flex-row flex-wrap justify-center items-center gap-8">
                <li className="basis-auto text-left mr-auto"><h1><a href="/">HOME</a></h1></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">PROGRAMS</a></li>
                <li><a href="#">TESTIMONIALS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>
        </>
    )
}