import Link from "next/link"
import React from "react"
import classes from "./MainHeader.module.css"

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>React Meetups</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link href={"/new-meetup"}>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
