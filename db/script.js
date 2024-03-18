const jobs = [
    ['LinkedIn Job Search', 'ZipRecruiter', 'Indeed Hiring Platform', 'Monster', 'Naukri.com', 'Dice', 'Hired', 'CareerBuilder Job Board', 'Glassdoor', 'hackajob', 'cord', 'Circa', 'PowerToFly', 'OfferZen', 'JobStreet', 'Handshake for Employers', 'Flexa', 'Otta', 'JOIN', 'Snagajob', 'Snaphunt', 'Give A Grad A Go', 'Triplebyte', 'Idealist', 'SimplyHired', 'Built In', 'USAJobs', 'Jobcase', 'Pipeline', 'Talent.com'],
    ['RepVue', 'WayUp', 'Untapped', 'Talent Zoo', 'JobBoard.io', 'Haystack', 'Handshake for Education Partners', 'Remotewant', 'TalentPools', 'GeekHunter', 'Job Portal Script', 'Blocket', 'eQuest', 'Careerleaf', 'Chegg Internships', 'Niceboard', 'Product Hunt', 'talent.io', 'Appcast', 'Hubstaff Talent', 'LinkUp', 'PitchMe', 'Comparably by ZoomInfo', 'FlexJobs', 'HR-ON Recruit', 'JobHopin', 'JobTarget', 'Ladders', 'MyDisabilityJobs', 'OnlineJobs.ph'],
    ['Haley Marketing', 'Jobbex', 'JobMatch', 'Juju', 'Nakuri', 'Qureos', 'Vettery', 'Adzuna', 'College Recruiter', 'Coroflot', 'Djangojobs', 'Dribbble Jobs', 'FunctionalJobs', 'GrabJobs', 'HackerTrail', 'HeadHunter.com', 'iHire', 'InfoJobs', 'interviewing.io', 'Jobillico', 'JobPlus', 'JobServe', 'Jobthemes', 'Lensa', 'Madgex', 'Moonlighting', 'Olibr Resourcing Pvt Ltd', 'Seek', 'TechCareers', 'The Mom Project'],
    ['The Muse for Employers', 'Underdog.io', 'Wellfound', 'Apna', 'AuthenticJobs', 'Before You Apply', 'Big.Jobs', 'Career Vault', 'ClearanceJobs', 'Credo', 'Cryptocurrency Jobs', 'Culinary Agents', 'Cuvette Tech', 'DailyRemote', 'DiversityJobs Powered by Circa', 'Dr. Job', 'eZ Jobs', 'Full-Stack Job', 'genvalues', 'Handshake for Custom Services', 'HiringOpps', 'Jabord', 'Jobbatical', 'JobBoardHQ', 'Jobicy', 'JobsInLogistics.com', 'jobsora.com', 'Jobstoday.world', 'Journalism Jobs', 'Kalibrr'],
    ['Landing.jobs', 'leboncoin Emploi Cadres', 'MatchWork', 'Mediabistro', 'Pakistan Jobs', 'Peple', 'Recruiter.com', 'Remotewokr', 'Remotive', 'Skillset', 'SmartHires', 'Snag', 'Stack Overflow Talent', 'Techfynder', 'Tempo', 'Totaljobs', 'TrueRank', 'Virtual OneStop', 'VueJobs', 'We Work Remotely', 'Wiggli', 'Work From Home Jobs', '30 Hour Jobs', '4Scotty', '50skills', '70 Million Jobs', 'Aijobs', 'Aileensoul Jobs', 'Aizenrecruitment', 'AmbitionBox'],
    ['Apply Direct', 'Aspen Technology Labs', 'Atsii', 'Attorney Jobs in USA', 'BEAMSTART', 'Berlin Startup Jobs', 'Boooom', 'Boss Zhipin', 'CakeResume', 'Careerboard', 'CareerCast', 'CareerCast', 'CareerMD', 'Careermine', 'CareerOne', 'Careers Worldwide', 'CareerWaze', 'Chiltern Hill', 'CleverConnect', 'CompanyMatch', 'ConnectIN Jobs Global', 'CreativeHeads.com', 'Crypto Jobs', 'Crypto Jobs List', 'DATAROCKSTARS', 'Daybook', 'Debut', 'Deskhiker', 'Diffr', 'DirectlyApply'],
    ['DistantJob', 'Dockendo', 'EasyJobScript', 'Eduvacancy', 'ejobsitesoftware', 'Employ Diversity', 'EmployeeLink', 'EmploySee', 'Enjoy Mondays', 'Fabskill', 'FactoryFix ATS', 'Fairygodboss', 'Faruse', 'FieldLevel', 'FindANursingJob.com', 'findjobsolutions', 'FindRemoteCareers.com', 'Fitnessjobs.global', 'ForceFinder', 'Founders Careers', 'GetWork', 'Glints', 'GoWorkaBit', 'Gradconnection', 'Guard Arena', 'Gyrojob', 'Habooz', 'Heirizon', 'Highered', 'Hire4X'],
    ['HireAE', 'HireBeen', 'HireOwl', 'Hireplace.it', 'Hirewire', 'Honeypot', 'HotLizard', 'https://www.dhiyo.ai/', 'Husky', 'ICE Recruit', 'IGB Job Posting', 'Industry', 'Infoempleo', 'Inploi', 'Inspire Global Solutions', 'Inten', 'Interview Cracker', 'Jamit', 'Japan Dev', 'Jobberman.com', 'Jobbio', 'JOBDONE', 'Job Engine', 'JobExpress', 'Jobify.pk', 'Jobiqo', 'JOBITT', 'JobOffer.com', 'Jobrapido', 'JobsArabi.net'],
    ['jobsite', 'JobSite Professional', 'Jobsite Script', 'jobsjobsjobs Pty Ltd', 'JobsLab', 'Jobs Lah', 'Jobs Network', 'JobsnProfiles', 'Jobspresso', 'JobStar - Indeed Clone Script', 'Job Today', 'joinsecret.com', 'Joinyfy', 'Jora', 'Juggle.jobs', 'Junoon', 'Karriere', 'Krops', 'Lazyhr.Com', 'Leftronic', 'Legal Recruitment &amp; Job Board', 'LinkCareer', 'Linkjobz.in', 'LocalWise', 'Loopcv', 'Make it in Ukraine', 'Matador Jobs', 'Metahire', 'Naylor Job Board &amp; Career Center', 'NodeFlair'],
    ['NoDesk', 'nPloy', 'NPO.net', 'Ofir', 'Oliv', 'OneWire', 'OnlyTopTalent', 'Outdefine', 'Outforce.ai', 'Outsourcely', 'Parodia', 'Perform Zone', 'PG Jobsite Pro', 'PlaceJobs', 'PlacementIndia.Com', 'Planet Software', 'PowerGrads', 'Prolancer', "Pycoder's Jobs", 'Qualitician', 'QuikrJobs', 'Receptix', 'Recruitdrip', 'Recruitment Exchange', 'RecruitMilitary', 'Recruitology', 'Remotely', 'RemotelyStack', 'Remote OK', 'RemoteWoman'],
    ['Remote Workers', 'Remotewx', 'Roleshare', 'Salesfolks', 'Savanhu', 'SearchBuddy', 'sForce Jobs', 'Shero', 'Shine Globe', 'Simplejobscript', 'Sirvo', 'SkillBooker', 'SkillGigs', 'Smartjobboard', 'Snap.hr', 'Softy Jobs', 'SparkySpot', 'Spur', 'startup.careers', 'Stepstone', 'SucceedSmart, Inc.', 'Superio', 'SwissDevJobs', 'Taggd', 'Talenetic', 'Talentbay', 'Talent finder', 'TalentsHunt.Com', 'Talent Torrent', 'TalentTribe'],
    ['TalentVine', 'Talroo Pro', 'Tapflow', 'teamglide', 'Techintern.io', 'TechKit', 'TechKluster', 'TechSalesJobs.org', 'The Job Auction', 'TheJobNetwork', 'The Outstaff.', 'TitanHouse', 'TopUSAJobs', 'TradesFactor', 'trampos', 'Trexinet', 'TrueJob', 'Unicorn Hunt', 'USJobPlace', 'VanHack', 'VentureLoop', 'vizajobs', 'Volcanic', 'Website Job Board', 'Welcome to the Jungle', 'WiT-ACE', 'WomenWhoCode', 'Workclass', 'Workees', 'Workex'],
    ['Working Not Working', 'Work In Health Tech', 'Workshape', 'Works Hub', 'YM Careers', 'Zelevate', 'Zippia']

]

const get_websites = function () {
    const sites = [];

    // var select = selectClass1.querySelector("[data-baby-grid-trigger]").attr;

    var select = document.querySelector('.segmented-shadow-card-container');
    

    var select2 = select.querySelectorAll('.x-ordered-inputs-initialized');

    select2.forEach((item) => {

        var selectClass2 = item.querySelector('.segmented-shadow-card');
        var selectClass3 = selectClass2.querySelector('.product-card');
        var selectClass4 = selectClass3.querySelector('.product-card__head');
        var selectClass5 = selectClass4.querySelector('.full-width');
        var selectClass6 = selectClass5.querySelector('.product-card__title');
        var selectClass7 = selectClass6.querySelector('.product-card__info');
        var selectClass8 = selectClass7.querySelector('.product-card__product-name');
        var selectClass9 = selectClass8.querySelector('.js-log-click');
        var selectClass10 = selectClass9.children[0];
        var selectClass11 = selectClass10.innerHTML;
        
        sites.push(selectClass11);
    });

    // var selectClass1 = select2.querySelector('.x-baby-grid-initialized');


    // var selectClass12 = selectClass11.querySelector('');
    // var selectClass13 = selectClass12.querySelector('');
    console.log(sites);
    
}

const list = {
    1: {
        title: "wuzzuf",
        link: "https://wuzzuf.net"
    },
    2: {
        title: "linkedin",
        link: "https://www.linkedin.com/jobs"
    },
    3: {
        title: "bayt",
        link: "https://www.bayt.com"
    },
    4: {
        title: "careerjet",
        link: "https://www.careerjet.com"
    },
    5: {
        title: "naukrigulf",
        link: "https://arabic.naukrigulf.com"
    },
    6: {
        title: "drjobpro",
        link: "https://www.drjobpro.com"
    },
    7: {
        title: "forasna",
        link: "https://forasna.com"
    },
    8: {
        title: "wzayef",
        link: "https://www.wzayef.com"
    },
    9: {
        title: "baaeed",
        link: "https://baaeed.com"
    },
    10: {
        title: "na3ml",
        link: "https://na3ml.com"
    },
    11: {
        title: "laimoon",
        link: "https://laimoon.com"
    },
    12: {
        title: "arabjobs",
        link: "https://www.arabjobs.com"
    },
    13: {
        title: "tanqeeb",
        link: "https://www.tanqeeb.com"
    },
    14: {
        title: "akhtaboot",
        link: "https://www.akhtaboot.com"
    },
    15: {
        title: "jooble",
        link: "https://www.jooble.org"
    },
    16: {
        title: "trabajo",
        link: "https://www.trabajo.org"
    },
    17: {
        title: "bebee",
        link: "https://www.bebee.com"
    },
    18: {
        title: "talent",
        link: "https://www.talent.com"
    },
    19: {
        title: "mideastjobs",
        link: "https://mideastjobs.net"
    },
    // 20: {
    //     title: "",
    //     link: ""
    // },
    // 21: {
    //     title: "",
    //     link: ""
    // },
    // 22: {
    //     title: "",
    //     link: ""
    // },
    // 23: {
    //     title: "",
    //     link: ""
    // },
    // 24: {
    //     title: "",
    //     link: ""
    // },
    // 25: {
    //     title: "",
    //     link: ""
    // }
    
}

const laravel = {
    1: {
        title: "Laracasts",
        link: "https://laracasts.com"
    },
    2: {
        title: "Test Driven",
        link: "https://course.testdrivenlaravel.com"
    },
    3: {
        title: "Confident Laravel",
        link: "https://confidentlaravel.com"
    },
    4: {
        title: "Laracon Online",
        link: "https://laracon.net"
    },
    5: {
        title: "Effective PHP",
        link: "https://phptherightway.com"
    },
    6: {
        title: "Laravel Core Adventures",
        link: "https://laravelcoreadventures.com"
    },
    7: {
        title: "Laravel Certification",
        link: "https://www.certificationforlaravel.com"
    },
    8: {
        title: "LaravelIO",
        link: "https://laravel.io/forum"
    },
    9: {
        title: "Larachat Slack Channel(jobs)",
        link: "https://larachat.co"
    },
    10: {
        title: "Laravel News",
        link: "https://laravel-news.com"
    },
    11: {
        title: "Laravel Podcast",
        link: "http://www.laravelpodcast.com"
    },
    12: {
        title: "larajobs",
        link: "https://larajobs.com"
    },
    13: {
        title: "Laravel Ecosystem",
        link: "https://ecosystem.laravel.io"
    },
    14: {
        title: "Laravel Valet",
        link: "https://github.com/laravel/valet"
    },
    15: {
        title: "Laravel Homestead",
        link: "https://github.com/laravel/homestead"
    },
    16: {
        title: "Mailtrap Blog",
        link: "https://mailtrap.io/blog"
    },
    17: {
        title: "Laravel Passport",
        link: "https://github.com/laravel/passport"
    },
    18: {
        title: "Laravel Scout",
        link: "https://github.com/laravel/scout"
    },
    19: {
        title: "Laravel Spark",
        link: "https://spark.laravel.com"
    },
    20: {
        title: "Laravel Nova",
        link: "https://nova.laravel.com"
    },
    21: {
        title: "Laravel dusk",
        link: "https://github.com/laravel/dusk"
    },
    22: {
        title: "Laravel Socialite",
        link: "https://github.com/laravel/socialite"
    },
    23: {
        title: "Laravel Echo",
        link: "https://github.com/laravel/echo"
    },
    24: {
        title: "Laravel Medialibrary",
        link: "https://github.com/spatie/laravel-medialibrary"
    },
    25: {
        title: "Laravel Mix",
        link: "https://laravel-mix.com"
    },
    26: {
        title: "Laravel Cashier",
        link: "https://github.com/laravel/cashier-stripe"
    },
    27: {
        title: "Laravel Envoy",
        link: "https://github.com/laravel/envoy"
    },
    28: {
        title: "Laravel Horizon",
        link: "https://github.com/laravel/horizon"
    },
    29: {
        title: "BotMan Studio",
        link: "https://botman.io/2.0/botman-studio"
    },
    29: {
        title: "Laravel Tenancy",
        link: "https://tenancyforlaravel.com"
    },
    30: {
        title: "Lumen",
        link: "https://lumen.laravel.com"
    },
    31: {
        title: "Laravel Telescope",
        link: "https://github.com/laravel/telescope"
    },
    32: {
        title: "Laravel WebSockets Package",
        link: "https://beyondco.de/docs/laravel-websockets"
    },
    33: {
        title: "Laravel Forge",
        link: "https://forge.laravel.com"
    },
    34: {
        title: "Laravel Vapor",
        link: "https://vapor.laravel.com"
    },
    35: {
        title: "Flare",
        link: "https://flareapp.io"
    },
    36: {
        title: "Laravel Shift",
        link: "https://laravelshift.com"
    },
    37: {
        title: "Laravel Envoyer",
        link: "https://envoyer.io"
    }
}

const react = {
    1:{
        title: "React Router",
        link: "https://reactrouter.com"
    },
    2:{
        title: "Ant-design",
        link: "https://ant.design"
    },
    3:{
        title: "Tailwind UI",
        link: "https://tailwindui.com"
    },
    4:{
        title: "Semantic UI React",
        link: "https://react.semantic-ui.com"
    },
    5:{
        title: "React Bootstrap",
        link: "https://react-bootstrap.netlify.app"
    },
    6:{
        title: "Fabric React",
        link: "https://react-fabric.github.io"
    },
    7:{
        title: "Styled components",
        link: "https://styled-components.com"
    },
    8:{
        title: "React DnD ",
        link: "https://react-dnd.github.io"
    },
    9:{
        title: "OnsenUI",
        link: "https://onsen.io"
    },
    10:{
        title: "Rebass",
        link: "https://rebass-v3.vercel.app"
    },
    11:{
        title: "Material UI",
        link: "https://mui.com"
    },
    12:{
        title: "React-motion",
        link: "https://github.com/chenglou/react-motion"
    },
    13:{
        title: "React Spinner",
        link: "https://www.davidhu.io/react-spinners"
    },
    14:{
        title: "React Hook Form",
        link: "https://react-hook-form.com"
    },
    15:{
        title: "ES-Lint",
        link: "https://github.com/jsx-eslint/eslint-plugin-react"
    },
    16:{
        title: "Prettier",
        link: "https://prettier.io/docs/en/install.html"
    },
    17:{
        title: "Enzyme",
        link: "https://enzymejs.github.io/enzyme"
    },
    18:{
        title: "Redux",
        link: "https://github.com/reduxjs/redux"
    },
    19:{
        title: "Mobx",
        link: "https://mobx.js.org/README.html"
    },
    20:{
        title: "Stripe Elements",
        link: "https://stripe.com/docs/stripe-js/react"
    },
    21:{
        title: "React 360",
        link: "https://reactresources.com/topics/react-360"
    },
    22:{
        title: "Viro React",
        link: "https://github.com/viromedia/viro"
    },
    23:{
        title: "Tremor",
        link: "https://www.tremor.so/"
    },
    24:{
        title: "Planby",
        link: "https://planby.app"
    },
    25:{
        title: "Advanced Cropper",
        link: "https://advanced-cropper.github.io/vue-advanced-cropper"
    },
    26:{
        title: "Modalize",
        link: "https://github.com/jeremybarbet/react-native-modalize"
    },
}

const laravelTools = function () {
    document.querySelector('.jobs-container').innerHTML = ''
    printJobs(laravel)
}

const reactLibrary = function () {
    document.querySelector('.jobs-container').innerHTML = ''
    printJobs(react)
}

const websitesFindJob = function () {
    document.querySelector('.jobs-container').innerHTML = ''
    printJobs(list)
}


const printJobs = function (arr) {

    // console.log(arr)

    const selectContainer = document.querySelector('.jobs-container');
    
        if(Array.isArray(arr)){

            // arr.forEach((item) => {
                    
            //     item.forEach((web => {

            //         const createJobDiv = document.createElement('div')
            //         createJobDiv.classList.add('job');
            //         selectContainer.appendChild(createJobDiv);

            //         const createH3 = document.createElement('h3');
            //         createH3.innerHTML = web;
            //         createJobDiv.appendChild(createH3);

                    
            //         const createJobRangDiv = document.createElement('div');
            //         createJobRangDiv.classList.add('jobs-job-range');
            //         createJobDiv.appendChild(createJobRangDiv);
            //         const pJobRangs = document.createElement('p');
            //         pJobRangs.innerText = `Job Rang : 69`;
            //         createJobRangDiv.appendChild(pJobRangs);

            //         const createJobcountCompanyDiv = document.createElement('div');
            //         createJobcountCompanyDiv.classList.add('jobs-job-range');
            //         createJobDiv.appendChild(createJobcountCompanyDiv);
            //         const pJobcountCompany = document.createElement('p');
            //         pJobcountCompany.innerText = `Count Company : 69`;
            //         createJobcountCompanyDiv.appendChild(pJobcountCompany);

            //         createJobDiv.onclick = () => clicked(createH3.innerHTML);

            //     }));
        
            //     // console.log(typeof item);
            // });

        } else {

            for(const [key,value] of Object.entries(arr)) {
                // console.log(key);

    
                const createJobDiv = document.createElement('div')
                createJobDiv.classList.add('job');
                selectContainer.appendChild(createJobDiv);
        
                const createH3 = document.createElement('h3');
                createH3.innerHTML = value.title;
                createJobDiv.appendChild(createH3);
        
                
                const createJobRangDiv = document.createElement('div');
                createJobRangDiv.classList.add('jobs-job-range');
                createJobDiv.appendChild(createJobRangDiv);
                const pJobRangs = document.createElement('p');
                pJobRangs.innerText = `Job Rang : 69`;
                createJobRangDiv.appendChild(pJobRangs);
        
                const createJobcountCompanyDiv = document.createElement('div');
                createJobcountCompanyDiv.classList.add('jobs-job-range');
                createJobDiv.appendChild(createJobcountCompanyDiv);
                const pJobcountCompany = document.createElement('p');
                pJobcountCompany.innerText = `Count Company : 69`;
                createJobcountCompanyDiv.appendChild(pJobcountCompany);
        
                createJobDiv.onclick = () => clicked(createH3.innerHTML,value.link);
    
            }


        }

        

}

    const clicked = function (web,link) {

    const selectClicked = document.querySelector('.job-clicked');
    const clickedA = selectClicked.querySelector('.job-clicked-link');
    clickedA.innerHTML = web;
    clickedA.setAttribute('href',link)

    const jobClickedWebData = selectClicked.querySelector('.job-clicked-visitors');
    jobClickedWebData.children[0].innerHTML = 'Unique monthly visitors :350M+';

    const jobClickedResumes = selectClicked.querySelector('.job-clicked-resumes');
    jobClickedResumes.children[0].innerHTML = 'job-clicked-resumes :245M';

    const jobClickedRatings = selectClicked.querySelector('.job-clicked-ratings');
    jobClickedRatings.children[0].innerHTML = 'Total ratings and reviews';

    const jobClickedAbout = selectClicked.querySelector('.job-clicked-web-about');
    jobClickedAbout.innerHTML = 
    `about : About Indeed
    Indeed is the #1 job site in the world1 with over 350M+ unique visitors every month2.
    Indeed strives to put job seekers first, giving them free access to search for jobs,
    post resumes, and research companies. Every day, we connect millions of people to new opportunities.
    Please note that Indeed and its affiliates are directly or indirectly owned by a publicly traded Japanese parent company,
    Recruit Holdings Co., Ltd.`;


    // console.log(jobClickedWebData.children[0].innerHTML = 'asd');

}

printJobs(list);




// try scrypt to featch job data


