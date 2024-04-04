

const Location = () => {
    return (
        <div className="mt-10">
            <div className="border-4 border-[#314E52] rounded-xl">
                <h1 className="text-2xl font-semibold  text-center bg-[#314E52] text-[#F7F6E7] pb-2 "> School Location</h1>
                <div  className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.4791854575545!2d89.04939056983642!3d23.821559500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febef0ebab3547%3A0x3eea5953bc48f408!2sKhorda%20Ail%20chara%20secondary%20School!5e0!3m2!1sen!2sbd!4v1712243877212!5m2!1sen!2sbd"
                        className="w-full h-[40vh] py-2"
                        width=""
                        height=""
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="eager"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
        </div>
    );
};

export default Location;