import SideNav from "./SideNav"

const layout = ({children}:any) => {
  return (
    <div className="grid grid-cols=[200px_minmax(900px,_1fr)_100px]">
        <SideNav />
        {children}
    </div>
  )
}

export default layout