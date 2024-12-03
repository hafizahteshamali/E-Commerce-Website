
const PreHeader = ({data}) => {
    const {Text, span} = data;
  return (
    <div className="bg-black p-3">
        <div className="w-[100%] m-auto text-center ">
            <h1 className="text-white">{Text} <span className="underline">{span}</span></h1>
        </div>
    </div>
  )
}

export default PreHeader