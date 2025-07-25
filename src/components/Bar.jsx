
const Bar = () => {
  return (
    <>
      <div className="relative">
        <hr className="h-[1px] border-0 w-full bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
        <hr className="absolute -top-[1px] h-[2px] w-1/12 border-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 shadow-glow animate-bar-left-right rounded-[100%]" />
      </div>
    </>
  )
}

export default Bar