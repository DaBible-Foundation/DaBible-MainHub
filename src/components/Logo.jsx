
import yoruba_white from "../assets/images/yoruba_white.png";
import download from "../assets/images/download.svg";

export function Logo ({ img=yoruba_white, color='', divClass="p-8", imgClass='max-w-[300px]', isDownloadable=true  }) {


    return (
        <div className={`${divClass} rounded relative logo_div`} style={{ backgroundColor: color, borderRadius: '10px', border: '2px solid #E6E6E6' }}>

            <img className={`mx-auto ${imgClass}`} src={img} />

            <div className="absolute w-full h-full z-2 top-0 left-0 flex justify-center items-center download" style={{backgroundColor: isDownloadable ? 'grey' : 'transparent', opacity:.6}}>

                {
                    isDownloadable && (

                        <a title="download logo" href={img} download={'dabible logo'} className="p-4 rounded-full border border-[#89213C] flex justify-center items-center download_circle">
                            <img src={download} width={30} height={30} />
                        </a>

                    )
                }

                
            </div>
        </div>
    );
}

export function WhiteLogo ({ img, divClass="p-8", imgClass='max-w-[300px]', isDownloadable=true   }) {

    return <Logo img={img} color="white" divClass={divClass} imgClass={imgClass} isDownloadable={isDownloadable} />
} 

export function DarkLogo ({ img, divClass="p-8",  imgClass='max-w-[300px]', isDownloadable=true   }) {

    return <Logo img={img} color="#242424" divClass={divClass} imgClass={imgClass} isDownloadable={isDownloadable}  />
} 

export function WhiteRectangleLogo ({ img, divClass="px-14 py-8", imgClass='max-w-[300px]', isDownloadable=true   }) {

    return <WhiteLogo img={img} divClass={divClass} imgClass={imgClass} isDownloadable={isDownloadable}   />

}

export function DarkRectangleLogo ({ img, divClass="px-14 py-8", imgClass='max-w-[300px]', isDownloadable=true   }) {

    return <DarkLogo img={img} divClass={divClass} imgClass={imgClass} isDownloadable={isDownloadable}  />

}