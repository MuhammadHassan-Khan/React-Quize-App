
import Button from './Button'

export default function Quize() {

    const foo = () => {
        alert("Okay")
    }

    return (<>
        <div className='border-4 border-gery   rounded-xl p-2 w-96 m-2 bg-slate-100 text-center' >
            <p className='text-3xl  py-4 font-bold' >Quize App</p>

            <p className='p-2 '>1)  Which is best languages for you</p>
            <div className='p-2' >

    
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label  className='px-2' for="html">HTML</label><br />
            </div>
            <div  className='p-2'  >
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label className='px-2'for="css">CSS</label><br />
            </div>
            <div className='p-2' >
                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                <label  className='px-2'  for="javascript">JavaScript</label><br />
            </div>

            <Button btnclick={() => foo()} lables="Next" />

        </div>

    </>


    )
}
