import ntuaLogo from './images/ntua_icon.png'

function AboutUs() {
    return (
        <div className='about-us-container'>
            <h1 className='page-title'>About Us</h1>
            <div className='text-image-container'>
                <div className='text-flex'>
                    <p>
                        The Artificial Intelligence and Learning Systems Laboratory (AILS Lab) is one of the main research units of the ECE NTUA,
                        directed by Professor Andreas-Georgios Stafylopatis. AILS Lab has been established as the union of two major ECE Laboratories,
                        the Image, Video and Multimedia Laboratory (IVML) and the Intelligent Systems Laboratory (ISLab), pioneering from 1989 in areas
                        like neural networks, multimedia content analysis, human interaction, fuzzy logics, ontological knowledge representation and reasoning.
                        Currently, AILS Lab has in total 39 members, 3 faculty, 3 faculty associates, 7 senior researchers, 2 postdoc researchers,
                        18 researchers and Ph.D students, and 6 supporting and technical staff, that are active members of the research community,
                        having published more than 200 journal and 400 international conference papers. AILS Lab has organised major International Conferences
                        on semantic content and multimedia analysis, artificial intelligence and machine learning and has been involved in more than a hundred EU R&#38;D projects
                        (8 of them running), in the area of artificial intelligence, machine learning and applications like multimedia content analysis,
                        digital cultural heritage and data analysis. Finally, members of the AILS Lab has been participating in several standardising organisations and activities
                        (MPEG, W3C, RuleMl, RRA and others).
                    </p>
                    <a href='https://www.ails.ece.ntua.gr/'>https://www.ails.ece.ntua.gr/</a>
                </div>
                <img src={ntuaLogo} className='image' alt="NTUA" />
                {/* <div className='auto-flex1'>
                    <div className='rectangle-'></div>
                    <div className='rectangle--1'></div>
                </div>
                <div className='auto-flex2'>
                    <div className='rectangle-'></div>
                    <div className='rectangle--1'></div>
                </div> */}


            </div>
        </div>
    )
}

export default AboutUs
