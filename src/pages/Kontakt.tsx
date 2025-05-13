export default function Kontakt() {

  return (
    <section className="grid grid-cols-3 place-items-center gap-4 mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
            <div className="shadow-xl w-full px-[30px] pt-[30px] pb-[10px] text-gray-900 rounded-lg flex flex-col gap-2 items-center text-center">
                <img src="/images/telefon.png" alt="icon von einem telefon" className="w-10 h-10"/>
                <h3>Telefon</h3>
                <a href="tel:02922781263">02922 - 88 09 021</a>
                <h3>Fax</h3>
                <a href="tel:02922781263">02922 - 88 09 022</a>
            </div>
            <div className="shadow-xl w-full h-full px-[30px] pt-[30px] pb-[10px] text-gray-900 rounded-lg flex flex-col gap-2 items-center text-center">
                <img src="/images/zuhause.png" alt="icon von einem haus" className="w-10 h-10"/>
                <h3>Adresse</h3>
                <p>Industriestraße 9 <br/> 59457 Werl</p>
            </div>
            <div className="shadow-xl w-full  h-full px-[30px] pt-[30px] pb-[10px] text-gray-900 rounded-lg flex flex-col gap-2 items-center text-center">
                <img src="/images/mail.png" alt="icon von einem brief" className="w-10 h-10"/>
                <h3>Email</h3>
                <a href="mailto:info@physio-nord.de">info@physio-nord-werl.de</a>
            </div>
    </section>
  );
} 