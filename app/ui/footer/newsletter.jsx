import Button from '../button'
import Input from '../input'


export default function Newsletter() {
    return (
        <section>
            <div className="max-w-container mx-auto px-3 flex justify-between items-center py-20"> 
                <div className="flex flex-col gap-6">
                    <h3 className="capitalize text-black-900 text-h3">join our Newsletter</h3>
                    <p className="text-black-500 text-regular">We love to surprise our subscribers with occasional gifts.</p>
                </div>
                <div className='flex gap-4'>
                    <Input placeholder='Your email address' inputType='email' /> 
                    <Button>Subscribe</Button>
                </div>
            </div>
        </section>
    )
}