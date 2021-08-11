import Link from 'next/link'
import { Fragment } from "react"

function Newspage() {
    return (
    <Fragment>
        <h1>The News Page</h1>
        <ul>
            <li>
                <Link href='news/nextjs-is-a-great-framework'>
                    NextJS Is A Great Framework
                </Link>
            </li>
            <li>Something else</li>
        </ul>
    </Fragment>
    )
}

export default Newspage