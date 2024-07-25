document.addEventListener('DOMContentLoaded', () => {
    const names = [
        { id: 1, name: 'ٱلْرَّحْمَـانُ', transliteration: 'AR-RAHMAAN', meaning: 'The Most or Entirely Merciful' },
        { id: 2, name: 'ٱلْرَّحِيْمُ', transliteration: 'AR-RAHEEM', meaning: 'The Bestower of Mercy' },
        { id: 3, name: 'ٱلْمَلِكُ', transliteration: 'AL-MALIK', meaning: 'The King and Owner of Dominion' },
        { id: 4, name: 'ٱلْقُدُّوسُ', transliteration: 'AL-QUDDUS', meaning: 'The Absolutely Pure' },
        { id: 5, name: 'ٱلْسَّلَامُ', transliteration: 'AS-SALAM', meaning: 'The Perfection and Giver of Peace' },
        { id: 6, name: 'ٱلْمُؤْمِنُ', transliteration: 'AL-MU’MIN', meaning: 'The One Who gives Emaan and Security' },
        { id: 7, name: 'ٱلْمُهَيْمِنُ', transliteration: 'AL-MUHAYMIN', meaning: 'The Guardian The Witness The Overseer' },
        { id: 8, name: 'ٱلْعَزِيزُ', transliteration: 'AL-AZEEZ', meaning: 'The All Mighty' },
        { id: 9, name: 'ٱلْجَبَّارُ', transliteration: 'AL-JABBAR', meaning: 'The Compeller The Restorer' },
        { id: 10, name: 'ٱلْمُتَكَبِّرُ', transliteration: 'AL-MUTAKABBIR', meaning: 'The Supreme The Majestic' },
        { id: 11, name: 'ٱلْخَالِقُ', transliteration: 'AL-KHAALIQ', meaning: 'The Creator The Maker' },
        { id: 12, name: 'ٱلْبَارِئُ', transliteration: 'AL-BAARI’', meaning: 'The Originator' },
        { id: 13, name: 'ٱلْمُصَوِّرُ', transliteration: 'AL-MUSAWWIR', meaning: 'The Fashioner' },
        { id: 14, name: 'ٱلْغَفَّارُ', transliteration: 'AL-GHAFFAR', meaning: 'The All- and Oft-Forgiving' },
        { id: 15, name: 'ٱلْقَهَّارُ', transliteration: 'AL-QAHHAR', meaning: 'The Subduer The Ever-Dominating' },
        { id: 16, name: 'ٱلْوَهَّابُ', transliteration: 'AL-WAHHAAB', meaning: 'The Giver of Gifts' },
        { id: 17, name: 'ٱلْرَّزَّاقُ', transliteration: 'AR-RAZZAAQ', meaning: 'The Provider' },
        { id: 18, name: 'ٱلْفَتَّاحُ', transliteration: 'AL-FATTAAH', meaning: 'The Opener The Judge' },
        { id: 19, name: 'ٱلْعَلِيمُ', transliteration: 'AL-‘ALEEM', meaning: 'The All-Knowing The Omniscient' },
        { id: 20, name: 'ٱلْقَابِضُ', transliteration: 'AL-QAABID', meaning: 'The Withholder' },
        { id: 21, name: 'ٱلْبَاسِطُ', transliteration: 'AL-BAASIT', meaning: 'The Extender' },
        { id: 22, name: 'ٱلْخَافِضُ', transliteration: 'AL-KHAAFIDH', meaning: 'The Reducer The Abaser' },
        { id: 23, name: 'ٱلْرَّافِعُ', transliteration: 'AR-RAAFI’', meaning: 'The Exalter The Elevator' },
        { id: 24, name: 'ٱلْمُعِزُّ', transliteration: 'AL-MU’IZZ', meaning: 'The Honourer The Bestower' },
        { id: 25, name: 'ٱلْمُذِلُّ', transliteration: 'AL-MUZIL', meaning: 'The Dishonourer The Humiliator' },
        { id: 26, name: 'ٱلْسَّمِيعُ', transliteration: 'AS-SAMEE’', meaning: 'The All-Hearing' },
        { id: 27, name: 'ٱلْبَصِيرُ', transliteration: 'AL-BASEER', meaning: 'The All-Seeing' },
        { id: 28, name: 'ٱلْحَكَمُ', transliteration: 'AL-HAKAM', meaning: 'The Judge The Giver of Justice' },
        { id: 29, name: 'ٱلْعَدْلُ', transliteration: 'AL-‘ADL', meaning: 'The Utterly Just' },
        { id: 30, name: 'ٱلْلَّطِيفُ', transliteration: 'AL-LATEEF', meaning: 'The Subtle One The Most Gentle' },
        { id: 31, name: 'ٱلْخَبِيرُ', transliteration: 'AL-KHABEER', meaning: 'The Acquainted the All-Aware' },
        { id: 32, name: 'ٱلْحَلِيمُ', transliteration: 'AL-HALEEM', meaning: 'The Most Forbearing' },
        { id: 33, name: 'ٱلْعَظِيمُ', transliteration: 'AL-‘ATHEEM', meaning: 'The Magnificent The Supreme' },
        { id: 34, name: 'ٱلْغَفُورُ', transliteration: 'AL-GHAFOOR', meaning: 'The Forgiving The Exceedingly Forgiving' },
        { id: 35, name: 'ٱلْشَّكُورُ', transliteration: 'ASH-SHAKOOR', meaning: 'The Most Appreciative' },
        { id: 36, name: 'ٱلْعَلِيُّ', transliteration: 'AL-‘ALEE', meaning: 'The Most High The Exalted' },
        { id: 37, name: 'ٱلْكَبِيرُ', transliteration: 'AL-KABEER', meaning: 'The Greatest The Most Grand' },
        { id: 38, name: 'ٱلْحَفِيظُ', transliteration: 'AL-HAFEEDH', meaning: 'The Preserver The All-Heedful and All-Protecting' },
        { id: 39, name: 'ٱلْمُقِيتُ', transliteration: 'AL-MUQEET', meaning: 'The Sustainer' },
        { id: 40, name: 'ٱلْحَسِيبُ', transliteration: 'AL-HASEEB', meaning: 'The Reckoner The Sufficient' },
        { id: 41, name: 'ٱلْجَلِيلُ', transliteration: 'AL-JALEEL', meaning: 'The Majestic' },
        { id: 42, name: 'ٱلْكَرِيمُ', transliteration: 'AL-KAREEM', meaning: 'The Most Generous The Most Esteemed' },
        { id: 43, name: 'ٱلْرَّقِيبُ', transliteration: 'AR-RAQEEB', meaning: 'The Watchful' },
        { id: 44, name: 'ٱلْمُجِيبُ', transliteration: 'AL-MUJEEB', meaning: 'The Responsive One' },
        { id: 45, name: 'ٱلْوَاسِعُ', transliteration: 'AL-WAASI’', meaning: 'The All-Encompassing the Boundless' },
        { id: 46, name: 'ٱلْحَكِيمُ', transliteration: 'AL-HAKEEM', meaning: 'The All-Wise' },
        { id: 47, name: 'ٱلْوَدُودُ', transliteration: 'AL-WADOOD', meaning: 'The Most Loving' },
        { id: 48, name: 'ٱلْمَجِيدُ', transliteration: 'AL-MAJEED', meaning: 'The Glorious The Most Honorable' },
        { id: 49, name: 'ٱلْبَاعِثُ', transliteration: 'AL-BA’ITH', meaning: 'The Resurrector The Raiser of the Dead' },
        { id: 50, name: 'ٱلْشَّهِيدُ', transliteration: 'ASH-SHAHEED', meaning: 'The All- and Ever Witnessing' },
        { id: 51, name: 'ٱلْحَقُّ', transliteration: 'AL-HAQQ', meaning: 'The Absolute Truth' },
        { id: 52, name: 'ٱلْوَكِيلُ', transliteration: 'AL-WAKEEL', meaning: 'The Trustee The Disposer of Affairs' },
        { id: 53, name: 'ٱلْقَوِيُّ', transliteration: 'AL-QAWIYY', meaning: 'The All-Strong' },
        { id: 54, name: 'ٱلْمَتِينُ', transliteration: 'AL-MATEEN', meaning: 'The Firm The Steadfast' },
        { id: 55, name: 'ٱلْوَلِيُّ', transliteration: 'AL-WALIYY', meaning: 'The Protecting Associate' },
        { id: 56, name: 'ٱلْحَمِيدُ', transliteration: 'AL-HAMEED', meaning: 'The Praiseworthy' },
        { id: 57, name: 'ٱلْمُحْصِيُ', transliteration: 'AL-MUHSEE', meaning: 'The All-Enumerating The Counter' },
        { id: 58, name: 'ٱلْمُبْدِئُ', transliteration: 'AL-MUBDI', meaning: 'The Originator The Initiator' },
        { id: 59, name: 'ٱلْمُعِيدُ', transliteration: 'AL-MU’ID', meaning: 'The Restorer The Reinstater' },
        { id: 60, name: 'ٱلْمُحْيِى', transliteration: 'AL-MUHYEE', meaning: 'The Giver of Life' },
        { id: 61, name: 'ٱلْمُمِيتُ', transliteration: 'AL-MUMEET', meaning: 'The Bringer of Death the Destroyer' },
        { id: 62, name: 'ٱلْحَىُّ', transliteration: 'AL-HAYY', meaning: 'The Ever-Living' },
        { id: 63, name: 'ٱلْقَيُّومُ', transliteration: 'AL-QAYYOOM', meaning: 'The Sustainer The Self-Subsisting' },
        { id: 64, name: 'ٱلْوَاجِدُ', transliteration: 'AL-WAAJID', meaning: 'The Perceiver' },
        { id: 65, name: 'ٱلْمَاجِدُ', transliteration: 'AL-MAAJID', meaning: 'The Illustrious the Magnificent' },
        { id: 66, name: 'ٱلْوَاحِدُ', transliteration: 'AL-WAAHID', meaning: 'The One' },
        { id: 67, name: 'ٱلْأَحَد', transliteration: 'AL-AHAD', meaning: 'The Unique The Only One' },
        { id: 68, name: 'ٱلصَّمَدُ', transliteration: 'AS-SAMAD', meaning: 'The Eternal Satisfier of Needs' },
        { id: 69, name: 'ٱلْقَادِرُ', transliteration: 'AL-QADEER', meaning: 'The Capable The Powerful' },
        { id: 70, name: 'ٱلْمُقْتَدِرُ', transliteration: 'AL-MUQTADIR', meaning: 'The Omnipotent' },
        { id: 71, name: 'ٱلْمُقَدِّمُ', transliteration: 'AL-MUQADDIM', meaning: 'The Expediter The Promoter' },
        { id: 72, name: 'ٱلْمُؤَخِّرُ', transliteration: 'AL-MU’AKHKHIR', meaning: 'The Delayer the Retarder' },
        { id: 73, name: 'ٱلأَوَّلُ', transliteration: 'AL-AWWAL', meaning: 'The First' },
        { id: 74, name: 'ٱلْآخِرُ', transliteration: 'AL-AAKHIR', meaning: 'The Last' },
        { id: 75, name: 'ٱلْظَّاهِرُ', transliteration: 'AZ-DHAAHIR', meaning: 'The Manifest' },
        { id: 76, name: 'ٱلْبَاطِنُ', transliteration: 'AL-BAATIN', meaning: 'The Hidden One Knower of the Hidden' },
        { id: 77, name: 'ٱلْوَالِي', transliteration: 'AL-WAALI', meaning: 'The Governor The Patron' },
        { id: 78, name: 'ٱلْمُتَعَالِي', transliteration: 'AL-MUTA’ALI', meaning: 'The Self Exalted' },
        { id: 79, name: 'ٱلْبَرُّ', transliteration: 'AL-BARR', meaning: 'The Source of Goodness the Kind Benefactor' },
        { id: 80, name: 'ٱلْتَّوَّابُ', transliteration: 'AT-TAWWAB', meaning: 'The Ever-Pardoning The Relenting' },
        { id: 81, name: 'ٱلْمُنْتَقِمُ', transliteration: 'AL-MUNTAQIM', meaning: 'The Avenger' },
        { id: 82, name: 'ٱلْعَفُوُّ', transliteration: 'AL-‘AFUWW', meaning: 'The Pardoner' },
        { id: 83, name: 'ٱلْرَّؤُفُ', transliteration: 'AR-RA’OOF', meaning: 'The Most Kind' },
        { id: 84, name: 'مَالِكُ ٱلْمُلْكُ', transliteration: 'MAALIK-UL-MULK', meaning: 'Master of the Kingdom Owner of the Dominion' },
        { id: 85, name: 'ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ', transliteration: 'DHUL-JALAALI WAL-IKRAAM', meaning: 'Possessor of Glory and Honour Lord of Majesty and Generosity' },
        { id: 86, name: 'ٱلْمُقْسِطُ', transliteration: 'AL-MUQSIT', meaning: 'The Equitable the Requiter' },
        { id: 87, name: 'ٱلْجَامِعُ', transliteration: 'AL-JAAMI’', meaning: 'The Gatherer the Uniter' },
        { id: 88, name: 'ٱلْغَنيُّ', transliteration: 'AL-GHANIYY', meaning: 'The Self-Sufficient The Wealthy' },
        { id: 89, name: 'ٱلْمُغْنِيُّ', transliteration: 'AL-MUGHNI', meaning: 'The Enricher' },
        { id: 90, name: 'ٱلْمَانِعُ', transliteration: 'AL-MANI’', meaning: 'The Withholder' },
        { id: 91, name: 'ٱلْضَّارُ', transliteration: 'AD-DHARR', meaning: 'The Distresser' },
        { id: 92, name: 'ٱلْنَّافِعُ', transliteration: 'AN-NAFI’', meaning: 'The Propitious the Benefactor' },
        { id: 93, name: 'ٱلْنُّورُ', transliteration: 'AN-NUR', meaning: 'The Light The Illuminator' },
        { id: 94, name: 'ٱلْهَادِي', transliteration: 'AL-HAADI', meaning: 'The Guide' },
        { id: 95, name: 'ٱلْبَدِيعُ', transliteration: 'AL-BADEE’', meaning: 'The Incomparable Originator' },
        { id: 96, name: 'ٱلْبَاقِي', transliteration: 'AL-BAAQI', meaning: 'The Ever-Surviving The Everlasting' },
        { id: 97, name: 'ٱلْوَارِثُ', transliteration: 'AL-WAARITH', meaning: 'The Inheritor The Heir' },
        { id: 98, name: 'ٱلْرَّشِيدُ', transliteration: 'AR-RASHEED', meaning: 'The Guide Infallible Teacher' },
        { id: 99, name: 'ٱلْصَّبُورُ', transliteration: 'AS-SABOOR', meaning: 'The Forbearing The Patient' }
      ];

      const nameContainer = document.getElementById('nameContainer');

      names.forEach((name) => {
          const card = document.createElement('div');
          card.classList.add('name-card');
  
          const nameElement = document.createElement('h2');
          nameElement.textContent = name.name;
  
          const transliterationElement = document.createElement('p');
          transliterationElement.classList.add('transliteration');
          transliterationElement.textContent = `Transliteration: ${name.transliteration}`;
  
          const meaningElement = document.createElement('p');
          meaningElement.textContent = `Meaning: ${name.meaning}`;
  
          card.appendChild(nameElement);
          card.appendChild(transliterationElement);
          card.appendChild(meaningElement);
  
          nameContainer.appendChild(card);
      });
  });