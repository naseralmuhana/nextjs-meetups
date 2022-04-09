import React from "react"
import classes from "./Layout.module.css"
import MainHeader from "./MainHeader"

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className={classes.main}>{children}</main>
    </>
  )
}

export default Layout
