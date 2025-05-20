import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import HTMLFlipBook from "react-pageflip";
import TimelineItem from "../TimelineItem/TimelineItem";

const About = ({ language }) => {
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".timeline-item, .about-text p");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animateStats = () => {
      const statNumbers = document.querySelectorAll(".stat-number");

      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-count"));
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
          current += increment;
          stat.textContent = Math.floor(current).toLocaleString();

          if (current >= target) {
            stat.textContent = target.toLocaleString();
            clearInterval(timer);
          }
        }, 16);
      });
    };

    // Trigger animation when component mounts
    animateStats();

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in, .milestone").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const timelines1 = [
    {
      year: "1980",
      items: [
        "சிக்கய்ய நாயக்கர் கல்லுரி மாணவர் பேரவைத் தலைவராக மாணவர்களால் தேர்ந்தெடுக்கபட்டுப் பணியாற்றினார்",
        "அதே ஆண்டு பெரியார் மாவட்ட அனைத்து கல்லுரி மாணவர் பேரவைத் தலைவராகவும் தேர்வு செய்யப்பட்டார்.",
        "அனைத்திந்திய மாணவர் பெருமன்றத்தின் மாநிலத் தலைவராக பொறுப்பேற்று செயல்பட்டார்"
      ]
    },
    {
      year: "1985",
      items: [
        "சோவியத் நாட்டின் தலைநகராகிய மாஸ்கோவில் நடைபெற்ற அகில உலக மாணவர்இளைஞர் மாநாட்டில் இந்தியாவின் பிரதிநிதிகளில் ஒருவராகத் தேர்வுசெய்யப்பட்டுக் கலந்து கொண்டார்",
        "'தலை சிறந்த இளம் பேச்சாளர் ' என்ற ஜேசீஸ் விருது பெற்றார்."
      ]
    },
    {
      year: "1989",
      items: ["'தலை சிறந்த இளைஞர்' என்ற ஜேசீஸ் விருது வழங்கப்பட்டது."]
    },
    {
      year: "2001",
      items: [
        "ஈரோடு தமிழ்ச் சங்கப் பேரவை சார்பில் 'சாதனைச் செம்மல் விருது' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2002",
      items: [
        "ரோட்டரி சங்கத்தின் உயர் விருதான 'For the sake of honour' என்ற விருது இவரது சமூக சேவையைப் பாராட்டி வழங்கப்பட்டது .",
        "'Top Line Award' என்ற கிரீன் சிட்டி ஜூனியர் சேம்பரின்' சிறந்த சேவையாளர் விருது வழங்கப்பட்டது.",
        "மாவட்ட மருத்துவர் சங்கத்தின் சார்பில் 'சிறந்த சேவையாளர் விருது' வழங்கப்பட்டது ."
      ]
    },
    {
      year: "2003",
      items: [
        "ஈரோடு ஜேசீஸ் அமைப்பின் சார்பில் 'தலை சிறந்த குடிமகன்' விருது வழங்கப்பட்டது.",
        "'இந்தியக் கலாச்சார நட்புறவுக் கழகத்தின் சார்பில் கோவையில் 'சாதனையாளர் விருது' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2004",
      items: [
        "நெய்வேலி லிக்னைட் கார்ப்பரேஷன் சார்பில் 'சிறந்த எழுத்தாளர் ' விருது வழங்கப்பட்டது",
        "ஈரோடு வடக்கு ரோட்டரி சங்கம் 'Vocational Excellence Award என்ற விருதினை in recognition of his outstanding achievements as an author in Tamil Literature' என்ற குறிப்புடன் வழங்கியது .",
        "ஈரோடு மத்திய அரிமா சங்கத்தின் சார்பில் 'சேவை செம்மல் விருது' வழங்கியது ."
      ]
    },
    {
      year: "2005",
      items: [
        "ஈரோடு சுப்ரீம் அரிமா சங்கம் 'சிகரம் 2005' என்ற சாதனையாளர் விருதினை வழங்கியது."
      ]
    },
    {
      year: "2006",
      items: [
        "ஈரோடு சக்திமசாலா நிறுவனத்தின் சக்திதேவி அறக்கட்டளை சார்பில்' சாதனையாளர் விருது' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2007",
      items: [
        "திருச்சி தென்மண்டல தொடர்கல்வி வாரியம் 'Knowledge Connectivity Award'என்ற விருதை வழங்கியது .",
        "திருவாடுதுறை ஆதினம் சார்பில் ஆதின சபையில் ஆதினம் அவர்களால் 'பன்னூல் பரப்பும் பைந்தமிழ்ச் செல்வர் ' என்ற விருது வழங்கப்பட்டது.",
        "திருச்சி மாவட்ட எழுத்தாளர் சங்கத்தின் சார்பில் 'பாரதி விருது' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2008",
      items: [
        "திருப்பூரில் அகில இந்திய வஉசி பேரவை சார்பில் 'மனித நேயச் செம்மல் விருது' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2010",
      items: [
        "திருச்சி தென்மண்டல தொடர்கல்வி வாரியம் 'Knowledge Connectivity Award'என்ற விருதை வழங்கியது .",
        "திருவாடுதுறை ஆதினம் சார்பில் ஆதின சபையில் ஆதினம் அவர்களால் 'பன்னூல் பரப்பும் பைந்தமிழ்ச் செல்வர் ' என்ற விருது வழங்கப்பட்டது.",
        "திருச்சி மாவட்ட எழுத்தாளர் சங்கத்தின் சார்பில் 'பாரதி விருது' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2011",
      items: [
        "பெரம்பலூர் மாவட்டம் செந்துறை செம்மொழி தமிழ்ச்சங்கம் 'செம்மொழிச்செம்மல்' என்ற விருதை வழங்கியது.",
        "திருச்சி தென்மண்டல தொடர் கல்வி வாரியம் சார்பில் 'மால்கம் நூற்றாண்டு கல்வி விருது' வழங்கப்பட்டது.",
        "பவானி திருமுறைக்கழகம் 'சிந்தனைச் சிற்பி' என்ற விருதை வழங்கியது."
      ]
    },
    {
      year: "2012",
      items: [
        "இந்தியன் ஓவர்சீஸ் வங்கி 'ஈரோட்டின் நாயகன்' விருதை வழங்கியது.",
        "கரூர் சென்ட்ரல் ரோட்டரி சங்கம் சார்பில் 'மொழிக்காவலர்' என்ற விருது வழங்கப்பட்டது.",
        "இந்திய கலாச்சார நட்புறவுக் கழகத்தின் (ISCUF) சார்பில் சேலத்தில் 'வாழ்நாள் சாதனையாளர் விருது' வழங்கப்பட்டது.",
        "ஈரோடு-காசிபாளையம் அரசு நூலக வாசகர் வட்டத்தின் சார்பில் 'சாதனையாளர் விருது' வழங்கப்பட்டது.",
        "மேட்டூர் தந்தை அறக்கட்டளை சார்பில் 'நூல் நேசச்செல்வர்' என்ற விருது' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2013",
      items: [
        "சென்னை அறவாணன் ஆராய்ச்சி அறக்கட்டளை சார்பில் 'அறவாணர் சாதனை' விருது வழங்கப்பட்டது.",
        "திருச்சி எஸ்.ஆர். வி. பள்ளியின் சார்பில் 'சமூக நோக்கு' என்ற விருதும் ரூ.20,000 பொற்கிழியும் வழங்கப்பட்டது.",
        "ஈரோடு காவேரி JCI(Junior Chamber International) சார்பில் 'Service Excellence award' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2014",
      items: [
        "சென்னை - கிருஷ்ணா ஸ்வீட்ஸ் நிறுவனம் மற்றும் தமிழ் சேம்பர் ஆப் காமர்ஸ் இணைந்து 'சாதனையாளர் விருது' வழங்கினர்",
        "கோவை - கற்பகம் பல்கலைக் கழகம் இவரது தொடர்ந்த சமூக சேவையைப் பாராட்டி 'கௌரவ டாக்டர் பட்டம்' வழங்கியது.",
        "கோவை -பாரதி பாசறை என்ற சமூகநல அமைப்பு சார்பில் ரூ.50,000 பொற்கிழியுடன் கூடிய 'பாரதி விருது' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2015",
      items: [
        "பெரியார் சுயமரியாதைப் பிரச்சார நிறுவனத்தின் சார்பில் 'புத்தகர் விருது' வழங்கப்பட்டது.",
        "கனடா நாட்டின் அரசு சார்பில் இவரின் சமூக சேவையை அங்கீகரித்து சிறந்த சேவையாளருக்கான 'பாராட்டுப் பட்டயம்' வழங்கப்பட்டது.",
        "அமெரிக்க நாட்டிலுள்ள நியூஜெர்சி சிதமிழ்ச்சங்கம், வாஷிங்டன் தமிழ்ச்சங்கம்,சிகாகோ தமிழ் இலக்கிய வட்டம் ஆகிய அமைப்புகளின் சார்பில் தனித்தனியாக 'சிறந்த சேவையாளர் விருது 'வழங்கப்பட்டது.",
        "திருச்சி - தென்னகத் தொடர்கல்வி குழுமம் சார்பில் 'கலாம் கல்வி விருது' வழங்கப்பட்டது.",
        "நாமக்கல் - நாமக்கல் கவிஞர் சிந்தனைப் பேரவையின் சார்பில் 'நாமக்கல் கவிஞர் நற்றமிழ் விருது' வழங்கப்பட்டது.",
        "வேலூர் - உலகத்தமிழ் வளர்ச்சி மன்றத்தின் சார்பில் 'சமூகச்சேவைச் செம்மல்' என்ற விருது வழங்கப்பட்டது."
      ]
    },
    {
      year: "2016",
      items: [
        "தஞ்சாவூர் -ம ாவட்டம் திருவையாறு, 'ஒளவைக் கோட்டம்' சார்பில் இவரது தமிழ்ப் பணியைப் பாராட்டி 'ஒளவை விருது' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2017",
      items: [
        "தூத்துக்குடி மாவட்டம் கோவில்பட்டி திருவள்ளுவர் மன்றத்தின் சார்பில் 'திருவள்ளுவர் விருது' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2018",
      items: [
        "சத்தியமங்கலம் ஸ்ரீ பண்ணாரி அம்மன் கல்வி அறக்கட்டளை சார்பில் 'சொற்கோ' என்ற பட்டம் வழங்கப்பட்டது.",
        "சென்னை - பம்மல் இலக்கிய மன்றத்தின் சார்பில் 'சிந்தனைச் செல்வர்' என்ற விருது' வழங்கப்பட்டது.",
        "சென்னை பாரதியார் சங்கத்தின் சார்பில் 'பாரதியார் விருது' வழங்கப்பட்டது."
      ]
    },
    {
      year: "2019",
      items: [
        "சென்னை-சங்கர தாஸ் சுவாமிகள் நினைவு மன்றத்தின் சார்பில் இவருக்கு 'நாடக நால்வர்' விருதும் 'சாதனைச் செம்மல்' என்ற பட்டமும் வழங்கப்பட்டது."
      ]
    }
  ];

  const timelineItems = [
    {
      year: "1970s",
      titletamil: "தொடக்கம்",
      contenttamil:
        "தனது 10ஆவது வயதில் 'மாணவர் முன்னேற்ற சங்கம்' என்ற அமைப்பைத் தொடங்கினார். பின்னர் 'பாரதி இளைஞர் மன்றம்' என்ற இளைஞர் அமைப்பைத் தோற்றுவித்து தொடர்ந்து சிறப்புடன் நடத்தி வந்தார். இந்த அமைப்பு வெள்ளி விழாக் கண்ட பெருமை கொண்டது. அத்தோடு 'பகத்சிங் இளைஞர் மன்றம்', 'இளைஞர் எழுச்சி இயக்கம்' ஆகிய அமைப்புக்களைத் தோற்றுவித்து நடத்திவந்தார். ஒரு கட்டத்தில் இத்தனை அமைப்புக்களையும் ஒன்றிணைத்து 'மக்கள் சிந்தனைப் பேரவை' என்ற கட்சி சார்பற்ற பொது நல அமைப்பினை கடந்த இருபது ஆண்டுகளுக்கு முன்பு நிறுவினார்.",
      contenteng:
        "At the age of 10, he started an organization called 'Manavar Munnetra Sangam'. Later he founded and continued to run a youth organization called 'Bharti Yuvadham Manram' with distinction. The organization is proud to witness a silver jubilee. In addition, he founded and ran the organizations 'Bahadsingh Youth Forum' and 'Youth Uprising Movement'. At one point, he united all these organizations and established a non-partisan public welfare organization called 'People's Thought Council' twenty years ago.",
      highlighttamil: "10ஆவது வயதில்"
    },
    {
      titletamil: "மக்கள் சிந்தனைப் பேரவை",
      titleeng: "People's Thought Council'",
      contenttamil:
        "இவர் உருவாக்கிய பொது நல அமைப்பு ஈரோட்டைத் தலைமையிடமாக கொண்டு மாநிலந் தழுவிய முறையில் மிகச் சிறப்பாகச் செயல்பட்டு வருகிறது. சமூகவியல் லட்சியங்களை அடிப்படையாகக் கொண்ட இவ்வியக்கம் மாணவர்கள், இளைஞர்கள், ஆசிரியர்கள் மற்றும் பொதுமக்கள் மத்தியில் எழுச்சியையும் விழிப்புணர்வையும் ஏற்படுத்தி வருகிறது.",
      contenteng:
        "The public welfare organization created by him called 'People's Thought Council' is functioning very well in the state wide system with its headquarters at Erode. This movement, based on sociological goals, is creating an upheaval and awareness among students, youth, teachers and the general public.",
      contenttamil1:
        "ஐம்பதாண்டு காலப் பாரம்பரியம்மிக்க 'ஈரோடு தமிழ் இலக்கியப் பேரவை'(சாகித்ய அகாடமியுடன் இணைக்கப்பட்டது)யின் செயலாளர், ஈரோடு மாவட்ட ரயில் பயணிகள் நலச் சங்கத் தலைவர் உள்ளிட்ட வேறு பல பொது அமைப்புகளிலும் முக்கியப் பொறுப்புகள் வகித்துச் செயல்பட்டு வருகிறார்.",
      contenteng1:
        "He is the secretary of fifty years old 'Erodu Tamil Literary Society' (affiliated with Sahitya Akademi), president of Erode District Railway Passengers Welfare Association and other public organizations.",
      highlighttamil:
        "ஐம்பதாண்டு காலப் பாரம்பரியம்மிக்க 'ஈரோடு தமிழ் இலக்கியப் பேரவை'",
      highligtheng: "fifty years old 'Erodu Tamil Literary Society'"
    },
    {
      titletamil: "மக்கள் சிந்தனைப் பேரவை",
      titleeng: "People's Thought Council'",
      contenttamil:
        "கலை, இலக்கியம், மொழி,வரலாறு, பொருளாதாரம், அரசியல், அறிவியல், சமூகவியல், தன்னம்பிக்கை, நாட்டுப்பற்று போன்ற சமூக முன்னேற்றத்திற்கும் மாற்றத்திற்குமான தலைப்புக்களில் மாநிலத்தின பல்வேறு பகுதிகளிலும் வேறு மாநிலங்களிலும் கடந்த 40 ஆண்டுகளாக சொற்பொழிவுகளை தொடர்ந்து நிகழ்த்தியுள்ளார்.",
      contenteng:
        "For the past 40 years, he has been delivering lectures on topics of social progress and change such as art, literature, language, history, economics, politics, science, sociology, self-reliance, patriotism, etc. in various parts of the state and other states.",
      highlighttamil:
        "கலை, இலக்கியம், மொழி,வரலாறு, பொருளாதாரம், அரசியல், அறிவியல், சமூகவியல், தன்னம்பிக்கை, நாட்டுப்பற்று",
      hightlinghteng:
        "art, literature, language, history, economics, politics, science, sociology, self-reliance, patriotism, etc"
    },
    {
      year: "1986",
      titletamil: "ஜீவா முழக்கம்",
      titleeng: "Jeeva Muzhakkam",
      contenttamil:
        "வார இதழின் சார்பில் சுதந்திரப் பொன் விழா மலர் ஒன்றினைத் தொகுக்கும் முழுப் பொறுப்பும் இவரிடத்தில் ஒப்படைக்கப்பட்டது. இவர் வட மாநிலங்களுக்கெல்லாம் நேரடியாகச் சென்று பல பயனுள்ள புதிய விபரங்களைத் திரட்டித் தொகுத்தார். அம் மலர் தமிழகத்தில் வெளியான விடுதலைப் பொன் விழா மலர்களிலேயே மிகச் சிறந்த மலராகப் பெரிதும் பாராட்டப்பட்டது.",
      contenteng:
        "He was entrusted with the entire responsibility of compiling the Golden Jubilee Flower of Freedom on behalf of 'Jiva Mukkam' - a weekly magazine. He went directly to all the northern states and collected many useful new information. The flower has been widely praised as the best flower among the Liberation Gold Festival flowers released in Tamil Nadu.",
      contenttamil1:
        "1986 ஆம் ஆண்டு பாட்னா சென்று விடுதலைப் போராட்ட வீராங்கனை கல்பனா அவர்களை நேரில் சந்தித்து அவருடன் ஒரு வாரம் உடனிருந்து அவரின் வீர வரலாற்றை அவர் மூலமாகவே நேரடியாகக் கேட்டறிந்தவர். நேதாஜியின் இந்திய தேசிய இராணுவத்தின் பெண்கள் படைத் தளபதியாக இருந்த கேப்டன் லட்சுமியை 1996 ஆம் ஆண்டு அவர் வசிக்கும் கான்பூர் நகரத்திற்குச் சென்று சந்தித்து அவருடன் சில நாட்கள் தங்கி அவரின் வரலாற்றை நேரடியாகக் கேட்டறிந்தவர். நூற்றுக்கணக்கான தியாகிகளை நேரில் சந்தித்து அவர்களின் வரலாற்றுக் குறிப்புகளைச் சேகரித்தவர்.",
      contenteng1:
        "He went to Patna in 1986 and met the freedom fighter Kalpana in person and spent a week with her and heard her heroic story directly through her. She met Captain Lakshmi, who was the women's corps commander of Netaji's Indian National Army, in 1996 when she went to Kanpur, where she lives, stayed with her for a few days and heard her story first hand. He personally met hundreds of martyrs and collected their historical notes.",
      highlighttamil:
        "விடுதலைப் போராட்ட வீராங்கனை கல்பனா அவர்களை நேரில் சந்தித்து அவருடன் ஒரு வாரம் உடனிருந்து அவரின் வீர வரலாற்றை அவர் மூலமாகவே நேரடியாகக் கேட்டறிந்தவர்",
      highlighteng:
        "met the freedom fighter Kalpana in person and spent a week with her and heard her heroic story directly through her"
    },
    {
      titletamil: "தேச விடுதலையும் தியாகச் சுடர்களும்",
      titleeng: "National Liberation and Sacrifice Flames",
      contenttamil:
        "இவரது தொகுப்புநூல் பிரசித்தி பெற்றதாகும். அத்தோடு 'வரலாற்றுப் பாதையில்...' என்ற இரண்டு பாகங்களைக் கொண்ட இவர் எழுதிய நூல் 2007ஆம் ஆண்டு வெளியான தமிழ் நூல்களிலேயே சிறந்த நூல் என சென்னை இலக்கியச் சிந்தனை அமைப்பினரால் தேர்வு செய்யப்பட்டு அந்த ஆண்டிற்கான 'இலக்கியச் சிந்தனை'ப் பரிசும் இந்நூலுக்கு வழங்கப்பட்டது. இவரது வானொலி உரைகள் 'மெய் வருத்தக் கூலிதரும்' என்ற தலைப்பில் நூலாக வெளிவந்துள்ளது.",
      contenteng:
        "His anthology 'National Liberation and Sacrifice Flames' is famous. In addition, his two-part book 'On the Path of History...' was selected as the best Tamil book published in the year 2007 by the Chennai Literary Thought Society and was awarded the 'Literary Thought' prize for that year. His radio speeches have been published as a book under the title 'Mei Abdak Koolidharum'.",
      contenttamil1:
        "விடுதலைப் போராட்டத்தில் தமிழகத்தின் பங்கை முழுமையாகத் திரட்டி 'விடுதலை வேள்வியில் தமிழகம்' என்ற மிகப்பெரிய நூலைத் தொகுத்துள்ளார். 1200 பக்கங்களையும் இரண்டு பாகங்களையும் கொண்ட இந்நூல் 2001 ஆம் ஆண்டு வெளியிடப்பட்டது. இந்நூலினைத் தயாரிக்க இவர் ஆறாண்டுகள் முழுக்க முழுக்க செலவிட்டதும் இவரே இந்நூலைப் பதிப்பித்ததும் குறிப்பிடத்தக்கதாகும். இந்நூலைத் தொகுக்க நாட்டின் பல பகுதிகளுக்கும் சென்று பல அரிய செய்திகளைச் சேகரித்துள்ளார். இதுவரை வெளிவராத அரிய புகைப்படங்கள் நூற்றுக் கணக்கில் திரட்டியுள்ளார். இந்நூலின் மூன்றாவது பாகத்தை இப்போது தயாரித்து வருகிறார்.இந்நூலின் மூன்று பாகங்களும் இந்தியிலும் ஆங்கிலத்திலும் கொண்டு வரும் தீவிர முயற்சியில் உள்ளார். 'தேசவிடுதலையும் தியாகச்சுடர்களும்', 'வரலாற்றுப் பாதையில்' (இரண்டு பாகங்கள்) ,'அன்பார்ந்த மாணவர்களே', 'கந்தகக் காவியங்கள்', 'மெய்வருத்தக் கூலிதரும', 'தமிழர்க்குப் பெருமை சேர்த்த தமிழர் எஸ். ஆர். நாதன்', 'சுதந்திரச் சுடர்கள்', 'த.ஸ்டாலின் குணசேகரன் நேர்காணல்கள் ' ,'விடுதலைக்கு விதை தூவிய விவேகானந்தர்', 'மனிதனுக்கு மரணமில்லை ', ஆகியவை இவரது பிற நூல்களாகும்.",
      contenteng1:
        "He has compiled a huge book titled 'Viduktuy Velviil Tamil Nadu', which has fully collected the role of Tamil Nadu in the freedom struggle. This 1200 page book in two parts was published in 2001. It is significant that he spent six years to prepare this book and published this book himself. To compile this book, he has traveled to many parts of the country and collected many rare messages. He has collected hundreds of rare photographs that have never been published. He is now preparing the third part of this book. He is actively trying to bring all the three parts of this book in Hindi and English. 'Emancipation and Martyrs', 'On the Path of History' (Two Parts), 'Dear Students', 'Sulfur Epics', 'Meivaruttha Kulidharuma', ' Tamil S who made Tamils ​​proud. R. Nathan', 'Sudantra Sudaram', 'Interviews with Stalin Gunasekaran', 'Vivekananda who sowed the seeds of liberation', 'Manithan no death' are his other books.",
      highlighttamil:
        "1200 பக்கங்களையும் இரண்டு பாகங்களையும் கொண்ட இந்நூல் 2001 ஆம் ஆண்டு வெளியிடப்பட்டது",
      highlighteng:
        "He has compiled a huge book titled 'Viduktuy Velviil Tamil Nadu'"
    },
    {
      titletamil: "இல்லந்தோறும் நூலகம்",
      titleeng: "Library in every home",
      contenttamil:
        "நூலகமில்லா ஊரில் குடியிருக்க வேண்டாம், 'நல்ல நூல்களே நல்ல நண்பர்கள்' என்ற முப்பெரும் முழக்கத்தை முன்வைத்து மாநிலந்தழுவிய முறையில் பொதுமக்களிடமும் மாணவர்களிடமும் வாசிக்கும் பழக்கத்தை மேம்படுத்த பல செயல்திட்டங்களைத் தீட்டி அவற்றை உயிரோட்டமாக நிறைவேற்றி வருகிறார்.",
      contenteng:
        "With the slogan 'Library in every home', 'Don't live in a town without a library' and 'Good books are good friends', he has planned many programs to improve the reading habits of the public and students in a state-wide manner and is implementing them vividly.",
      contenttamil1:
        "இதன் தொடக்கமாக இவரது சொந்த ஊரான ஈரோட்டிற்கருகிலுள்ள மாணிக்கம்பாளையத்தில் இவரின் முயற்சியால் மக்கள் சிந்தனைப் பேரவையின் சார்பில் சுமார் 4 லட்ச ரூபாய் செலவில் புதிதாக நூலகக் கட்டிடம் கட்டியதோடு 6,000 க்கும் மேற்பட்ட நல்ல நூல்களையும் அன்பளிப்பாக அந்நூலகத்திற்கு வழங்கியுள்ளார். இந்நூலகத்தை அரசிற்கு ஒப்படைக்கும் விழாவை மாவட்ட ஆட்சித் தலைவரின் தலைமையில் நடத்தி ஒப்படைத்ததோடு தற்போது அதனை பல்லாயிரம் அரிய நூல்களடங்கிய அரசு நூலகமாகச் செயல்பட வழிவகைசெய்தார். 2,000 க்கும் மேற்பட்ட உறுப்பினர்களைச் சேர்த்து தற்போது மாவட்டத்தில் செயல்பட்டு வரும் சிறந்த நூலகங்களில் ஒன்றாக செயல்பட்டு வருகிறது. மாவட்டத்தின் வேறு பல பகுதிகளிலும் தனியார் நூலகங்களை உருவாக்கியுள்ளார். தமிழகத்தின் புகழ்மிக்க புத்தக நிறுவனமான 'நியு செஞ்சுரி புக் ஹவுஸ்' நிறுவனத்தின் இயக்குநர் பொறுப்பு வகிக்கும் இவர் 'உங்கள் நூலகம்' என்ற புத்தகம் சார்ந்த மாத இதழின் ஆசிரியராகவும் செயல்பட்டு வருகிறார்.",
      contenteng1:
        "To begin with, a new library building was constructed at a cost of 4 lakh rupees on behalf of the People's Thought Council in his hometown Manikampalayam near Eroti and he donated more than 6,000 good books to the library. The ceremony of handing over this library to the government was conducted under the leadership of the District Governor and he made it available as a government library containing thousands of rare books. It is currently functioning as one of the best libraries in the district with over 2,000 members. He also established private libraries in many other parts of the district.",
      highlighttamil:
        "6,000 க்கும் மேற்பட்ட நல்ல நூல்களையும் அன்பளிப்பாக அந்நூலகத்திற்கு வழங்கியுள்ளார், 2,000 க்கும் மேற்பட்ட உறுப்பினர்களைச் சேர்த்து தற்போது மாவட்டத்தில் செயல்பட்டு வரும் சிறந்த நூலகங்களில் ஒன்றாக செயல்பட்டு வருகிறது",
      hightlinghteng: "donated more than 6,000 good books to the library"
    },
    {
      titletamil: "பல்கலைக் கழகங்களிலும் கல்லூரி ",
      titleeng: "'New Century Book House' ",
      contenttamil:
        "பள்ளிகளிலும் மாணவர்களிடையே இடையறாது சொற்பொழிவாற்றி வரும் இவர் தனது வித்தியாசமான உரைவீச்சு மூலமாகவும் மக்கள் சிந்தனைப் பேரவையின் இதர மாணவர் நலன் சார்ந்த செயல்திட்டங்கள் மூலமாகவும் மாணவர்கள் மத்தியில் ஒரு ஆரோக்கியமான தாக்கத்தை உருவாக்கியுள்ளார்.",
      contenteng:
        "He is the managing director of Tamil Nadu's famous book company 'New Century Book House' and is also the editor of a book-based monthly magazine called 'Mumra Bibriyam'. A regular lecturer in universities and colleges-schools, he has created a healthy impact among the students through his unique speech delivery and other student welfare programs of the People's Thought Council.",
      contenttamil1:
        "இளைஞர்களுக்கு சுயதொழில் தொடங்கவும் சுய வேலைவாய்ப்பை உருவாக்கிக் கொள்ளவும் தனியாக பயிற்சி முகாம்கள் பல நடத்தியுள்ளார். மாணவர்களுக்கு எதிர்காலத்தில் 'என்ன படிக்கலாம் - எப்படிப் படிக்கலாம்' என்பதற்கான மாணவர் விழிப்புணர்வு கருத்தரங்கங்கள் பலவற்றை நடத்தி மாணவர்களுக்கு வழிகாட்டி வருகிறார்.",
      contenteng1:
        "He has conducted several training camps for youth to start self-employment and create self-employment. He conducts many student awareness seminars on 'what to study - how to study' for future students.",
      highlighttamil: "'என்ன படிக்கலாம் - எப்படிப் படிக்கலாம்'",
      highlighteng: "what to study - how to study"
    },
    {
      titletamil: "பாரதிவிருது",
      titleeng: "Bharathiviru",
      contenttamil:
        "ஈரோட்டில் கடந்த 35 ஆண்டுகளாகத் தொடர்ந்து மிகச்சிறப்பாக பாரதி விழாவை இடைவிடாமல் மிகச்சிறப்பாக நடத்தி வருகிறார். கடந்த 20 ஆண்டுகளாக மக்கள் சிந்தனைப் பேரவையின் சார்பில் இவரால் நடத்தப்படும் பாரதிவிழாவில் மாநில அளவில் தேர்வு செய்யப்பட்ட ஒரு அறிஞருக்கு 'பாரதிவிருது' வழங்கி கௌரவிக்கப்படுகிறது. இந்த விழா மாநிலத் தன்மை கொண்டதாக விரிந்த அளவில் நடத்தப்பட்டு வருகிறது.",
      contenteng:
        "He has been conducting the Bharti festival in Erode continuously for the past 35 years. For the past 20 years, a scholar selected at the state level has been honored with a 'Bharathiviru' at the Bharathivizha conducted by him on behalf of the People's Thought Council. This festival is being held on a grand scale with a state character.",
      contenttamil1:
        "அரசுப்பொதுத்தேர்வில் தங்களது மாணவர்களை நூறு சதவிகிதம் தேர்ச்சி பெற வைக்கும் ஈரோடு மாவட்டம் முழுக்கப் பணியாற்றும் அரசுப்பள்ளி ஆசிரியப் பெருமக்களுக்குப் பாராட்டு விழாவை எழுச்சி மிக்க முறையில் ஆண்டுதோறும் ஈரோடு நகரில் கடந்த 20 ஆண்டுகளாக நடத்தி வந்தார். இவ்விழாவில் நுட்ருகனக்கான ஆசிரியப்பெருமக்கள் பாராட்டுமடல் பெற்று உற்சாகமடைந்தனர்.",
      contenteng1: "He has been conducting the Bharti festival in Erode ",
      highlighttamil:
        "35 ஆண்டுகளாகத் தொடர்ந்து மிகச்சிறப்பாக பாரதி விழாவை இடைவிடாமல் மிகச்சிறப்பாக நடத்தி வருகிறார்",
      highlighteng: "Bharathiviru"
    },
    {
      year: "2005",
      titletamil: "ஈரோடு புத்தகத்திருவிழா",
      titleeng: "Erode Book Festival",
      contenttamil:
        "2005 முதல் கடந்த 14 ஆண்டுகளாக 'ஈரோடு புத்தகத்திருவிழா' என்ற பெயரில் தேசியத் தரத்துடன் கூடிய மாநில அளவிலான மிகப்பெரும் புத்தகக்கண்காட்சியை ஈரோடு நகரில் நடத்திவருகிறார். ஆண்டுதோறும் ஆகஸ்ட் மாதத்தில் 12 நாட்கள் நடைபெறும் இப்புத்தகத்திருவிழாவில் கடந்த ஆண்டு (2018) மட்டும் 12 நாட்களில் சுமார் 7 கோடி ரூபாய்க்கும் மேல் புத்தகங்கள் விற்பனையாகியுள்ளன. சுமார் 7 லட்சத்திற்கும் மேல் மக்கள் இப்புத்தகத்திருவிழாவிற்கு வந்து சென்றுள்ளனர். இப்புத்தகத் திருவிழா சிறிதளவும் வணிகத்தன்மையற்று நுழைவுக்கட்டணம் கூட இல்லாமல் முழுக்க சமூகமுன்னேற்றத்தை அடிப்படையாகக்கொண்டு நடத்தப்படுவதாகும்.",
      contenteng:
        "For the past 20 years, he has been conducting the Appreciation Ceremony for the Government School Teachers of the entire Erode District who make their students pass in the Government General Examination in an exciting manner every year for the past 20 years. In this ceremony, the professors of Nutrugana were excited to receive a plaque of appreciation. Since 2005, for the last 14 years, he has been organizing the state-level biggest book fair in the city of Erode under the name of 'Erodu Book Festival'. Last year (2018) only books worth more than 7 crore rupees were sold in 12 days in this book festival which is held for 12 days in August every year. More than 7 lakh people have visited this book festival. This book festival is run entirely on the basis of social progress without any commercialism and no entry fee."
    },
    {
      year: "Present",
      titletamil: "தொடரும் பணிகள்",
      titleeng: "Ongoing Works",
      contenttamil:
        "இவை மட்டுமின்றி பல்வேறு சமூக நலன் சார்ந்த நிகழ்ச்சிகள் ஆண்டு முழுக்க மக்களுக்குப் பயன் தரும் வகையில் இவரது முன்முயற்சியால் தொடர்ந்து நடத்தப்பட்டு வருகிறது.",
      contenteng:
        "Apart from these, various social welfare programs are being conducted by his initiative to benefit the people throughout the year."
    }
  ];

  return (
    <div className="about-container">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="about-header">
        <h1>
          {language === "tamil"
            ? "திரு.த.ஸ்டாலின் குணசேகரன் பற்றி"
            : "About Mr.Th.Stalin Gunasekaran"}
        </h1>
      </div>

      <div className="personal-card">
        <div className="personal-info">
          <div className="info-item">
            <span className="info-label">
              {language === "tamil" ? "பெயர்-" : "Name"} 
            </span>
            <span className="info-value">
              {language === "tamil"
                ? "த.ஸ்டாலின் குணசேகரன்"
                : "Th.Stalin Gunasekaran"}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">
              {language === "tamil"
                ? "கல்வித் தகுதி-"
                : "Education Qualification"}
               
            </span>
            <span className="info-value">
              {language === "tamil" ? "பி.எஸ் ஸி., பி.எல் .," : "B.Sc., B.L.,"}
            </span>
          </div>
          <div className="info-item">
            <span className="info-label">
              {language === "tamil" ? "தொழில்-" : "Profession"} 
            </span>
            <span className="info-value">
              {language === "tamil" ? "வழக்குரைஞர்" : "Lawyer"}
            </span>
          </div>
        </div>
      </div>

      <div className="timeline-container">
        {timelines1.map((entry, index) => (
          <TimelineItem entry={entry} index={index} key={index} />
        ))}
      </div>

      <div className="about-container1">
        <div className="about-header1">
          <h2>
            {language === "tamil"
              ? "சாதனைகளின் பயணம்"
              : "Journey of the Achievements"}
          </h2>
          <div className="header-decoration1"></div>
        </div>

        <div className={`book-wrapper ${isOpened ? "opened" : "closed"}`}>
          {!isOpened && (
            <div className="open-hint">
              {language === "tamil"
                ? "புத்தகத்தைத் திறக்க புத்தகத்தின் மேல் கிளிக் செய்யவும்!"
                : "Click on the book to open the book!"}
            </div>
          )}

          <HTMLFlipBook
            width={500}
            height={600}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1536}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className="book"
            onFlip={() => {
              if (!isOpened) setIsOpened(true);
            }}
          >
            {timelineItems.map((item, index) => (
              <div key={index} className="page">
                <div className="page-content">
                  <h3>
                    {item.year && (
                      <span className="year-badge1">{item.year}</span>
                    )}
                    {language === "tamil"
                      ? item.titletamil
                      : item.titleeng}
                  </h3>
                  <p>
                    {" "}
                    {language === "tamil"
                      ? item.contenttamil
                      : item.contenteng}
                  </p>
                  <p>
                    {" "}
                    {language === "tamil"
                      ? item.contenttamil1
                      : item.contenteng1}
                  </p>
                  {item.highlight && (
                    <span className="highlight1">
                      {" "}
                      {language === "tamil"
                        ? item.highlighttamil
                        : item.highlighteng}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
};

export default About;
