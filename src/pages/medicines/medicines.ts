import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicinesDetailsPage } from '../page';

/**
 * Generated class for the MedicinesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicines',
  templateUrl: 'medicines.html',
})
export class MedicinesPage {

  medicines: Array<{id: any, arabic: string, name: string, note: string, transliteration:string, translation: string, explanation1: string, explanation2: string, explanation3: string, explanation4: string, explanation5: string,  }>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.medicines = [];
    this.medicines.push(
    {id: 1, arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ العَلِيمُ", name: "Robana 1", note: "Suratul Baqarah vs 127 ", transliteration:"RABBANA TAQABBAL MINN INNAKA ’ANTAS-SAMI-`UL- `ALIM.", translation: " Our Lord! Accept from us this (service); verily You alone are the al-Hearing, the al-Knowing", explanation1: " This du`a was read by Ibrahim and Ismail when they completed the building of the Ka’bah.", explanation2: "The lesson is that a person must not be satisfied with actions only.   Rather,  after  the  action,  be humble and beg Allah to accept it.  This is taught from the action of Ibrahim . After completing such a lofty action he does not express pride, rather he asks Allah to accept the action. ", explanation3: "", explanation4: "", explanation5: ""},
    {id: 2, arabic: "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِن ذُرِّيَّتِنَا أُمَّةً مُّسْلِمَةً لَّكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَآ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ", name: "Robana 2", note: "Suratul Baqarah vs 128", transliteration:"RABBANA WAJ`ALN MUSLIMAYNI LAKA WA MIN DHURRIYYATIN UMMATAM-MUSLIMATAL-LAK;  WA ’ARIN MANSIKAN WA TUB `ALAYN; INNAKA ’ANTAT-TAWWBUR-RAHIM.", translation: "Our Lord! Make us (Muslims) submissive to Your Will, and raise from our offspring a (Muslim) community submissive to you, and teach us our rites of worship and relent toward us. Verily You alone are the most relenting, the Ever-Merciful", explanation1: "This du’a is the end result of Ibrahim’s fear and recognition of Allah after completing actions.  Whilst being obedient and subservient.  One should make this du`a for obedience and subservience to Allah alone.  The reason is that when the recognition of Allah is increased in a person his realisation is also increased.", explanation2: "Ibrahim also made du`a for his offspring.  The close servants of Allah are more concerned about the spiritual welfare of their offspring especially their welfare in the Aakhirah.  Another reason for praying for the off-spring is that they may, by their good deeds set a good example to future generations and the nation of Islam will benefit as a whole. ", explanation3: "", explanation4: "", explanation5: ""},
    {id: 3, arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", name: "Robana 3", note: "Suratul Baqarah vs 201", transliteration:"RABBANA ATINA FIDDUNYA HASANATAW- WA FIL- AKHIRATI HASANATAW-WA QINA `ADHABAN-NAR.", translation: "O our Lord! Grant us good in the world and good in the Hereafter and save us from the torment of the fire", explanation1: "", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 4, arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْراً وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى القَوْمِ الكَافِرِينَ", name: "Robana 4", note: "Suratul Baqarah vs 250", transliteration:"RABBANA AFRIGH `ALAYNA SABRAW-WA THABBIT AQDAMANA WAN-SURNA `ALAL-QAWMIL-KAFIRIN.", translation: "Our Lord! Bestow on us endurance and make us firm of foot and grant us victory over the disbelieving folk.", explanation1: " This du’a was read by the believers when they were at war with Jaloot. Before the army confronted them, they recited this du’a.", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 5, arabic: "رَبَّنَا لاَ تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا", name: "Robana 5", note: "Suratul Baqarah vs 286", transliteration:"RABBANA LA TU’A-KHIDHNA IN-NASINA AW AKHTA‘NA.", translation: "Our Lord! Call us not to account if we forget or err", explanation1: "", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 6, arabic: "رَبَّنَا وَلاَ تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا", name: "Robana 6", note: "Suratul Baqarah vs 286", transliteration:"RABBAN WALA TAHMIL `ALAYNA ISRAN KAMA HAMALTAHU `ALAL-LADHINA MIN QABLINA.", translation: "Our Lord! Lay not on us such a (heavy) burden as you did lay on those who have passed away before us.", explanation1: "", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 7, arabic: "رَبَّنَا وَلاَ تُحَمِّلْنَا مَا لاَ طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلاَنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ", name: "Robana 7", note: "Suratul Baqarah vs 286", transliteration:"RABBAN WALA TUHAMMILN MALA TAQATA LANA BIH. WA`FU `ANNA, WAGHFIRLANA, WARHAMNA.  ANTA MAWLANA FANSURN `ALAL-QAWMIL KAFIRIN.", translation: "Our Lord! Lay not on us that burden which we have not the strength to bear. And pardon us; absolve us; and have mercy on us; You alone are our Friend and Helper; help us to triumph over The unbelieving folk.", explanation1: "A  narration by Abu Hurairah t in Bukhari and Muslim proves that the above du`a when made by Nabi was accepted. - Tafsir Mazhari Vol. 2. P. 165", explanation2: "Ibn Abbas narrates: We, as a group were sitting in the company of Nabi.  Jibra’il was also present.  Suddenly, the sound of a door opening was heard from above.  Jibra’il lifted his gaze to see.  He then said  “The door that has now opened does not open normally”.  The narrator says: Meanwhile an Angel descended and came to Nabi and said Glad tidings to you for two such celestial lights  (Our Lord! Lay not on us that burden which we have not the strength to bear. And pardon us; absolve us; and have mercy on us; You alone are our Friend and Helper; help us to triumph over The unbelieving folk). which were not given to any Rasul before you. The first is Suratul Fatihah and the second is the concluding ayah of Suratul Baqarah.  If you read even one letter from it, you will attain that celestial light. - Muslim" , explanation3: "Note: It means that by reading “IHDINAS SIRATAL-MUSTAQIM” Allah I will most certainly show you the right path and secondly by reciting the last ayah of Suratul Baqarah, Allah will most surely accept your du`a and grant you that which you have asked for. -  Mazhari Vol. 1. P. 14 & Vol. 2 P. 166 ", explanation4: " Abu Sa`id Ansari narrates that Rasulullah said “The person who recites the last two ayaat of Suratul Baqarah, it will suffice  him for the entire night. - Mazhari P. 167", explanation5: ""},
    {id: 8, arabic: "رَبَّنَا لاَ تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً إِنَّكَ أَنتَ الْوَهَّابُ", name: "Robana 8", note: "Suratul Imran vs 8", transliteration:"RABBANA LA TUZIGH QULUBANA BA`DA ‘IDH HADAYTANA WA HAB LANA MIL-LADUNKA RAHMAH; INNAKA ANTAL-WAHHAB.", translation: "Our Rabb! Do not stray our hearts after granting us Hidayat (guidance) and gift us from Your Mercy (special), Definitely You are the only Bestower.", explanation1: " Aisha narrates, Rasulullah used to recite this du`a when awakening in the morning. - Ibn Kathir Vol. 1. P. 356 ", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 9, arabic: "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لاَّ رَيْبَ فِيهِ إِنَّ اللّهَ لاَ يُخْلِفُ الْمِيعَادَ", name: "Robana 9", note: "Suratul Imran vs 9", transliteration:"RABBANA ’INNAKA JAMI`UN-NASI LI-YAWMILLA RAYBA FIH; INNAL-LAHA LA YUKHLIFUL-MI`AD.", translation: "Our Lord! Surely You are the Gatherer of all mankind on a Day about which there is no doubt. Verily Allah never fails in His Promise.", explanation1: "The ayah (du`a) before this ayah was concerning steadfastness.  Subsequently this du`a was not revealed for any worldly motives.  It was solely made for the Akhirah and to seek refuge from Jahannum, as our belief is “O Allah You are going to gather us on such a day regarding which there is no doubt”. - Mariful Qur’an - Vol. 2. P. 23", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 10, arabic: "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ", name: "Robana 10", note: "Suratul Imran vs 16", transliteration:"RABBANA ’INNANA ’AMANNA FAGHFIR LANA DHUNUBANA WAQINA `ADHABAN-NAR", translation: "O our Lord surely we have believed; forgive us then our sins; and save us from the torment of the fire.", explanation1: "Making a du`a of this nature is the quality of (those who fear Allah) by being cautious regarding the law of shariah.", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 11, arabic: "رَبَّنَآ ءَامَنَّا بِمَآ أَنزَلْتَ وَٱتَّبَعْنَا ٱلرَّسُولَ فَٱكْتُبْنَا مَعَ ٱلشَّٰهِدِينَ", name: "Robana 11", note: "Suratul Imran vs 53", transliteration:"RABBANA AMANNA BIMA ‘ANZALTA WATTABA`NAR-RASULA FAKTUBNA MA`ASH-SHAHIDIN.", translation: "Our Lord! We believe in that which You have sent down; and we follow the Apostle; so write us with those who bear witness to the truth.", explanation1: " This du`a was made by the helpers of Esa .  When Esa asked his nation that who amongst them will be his helpers. They agreed and read this du`a as emphasis of their claim. - Mariful Quran Vol. 2. P. 70 ", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 12, arabic: "ربَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَِ", name: "Robana 12", note: "Suratul Imran vs 147", transliteration:"RABBANAGHFIR LANA DHUNUBANA WA ISRAFANA FI AMRINA WA THABBIT AQDAMANA WANSURNA `ALAL QAWMIL-KAFIRIN.", translation: "Our Lord! Forgive us our sins, and our excesses that we have committed in our affairs, and Lord! Keep us firm-footed and grant us victory over the disbelieving folk.", explanation1: "No person can be assured that the good actions he is doing presently will be done continually. Therefore we should express regret on the deficiency of our present actions and make it a habit to make du`a for steadfastness in regard to our future actions. In the above du`a, firstly, forgiveness is being sought for previously committed sins. This is an indication to the fact that whatever difficulties / problems befalls a person, be it in the form of defeat from the enemies or any other problem, is in reality the consequence of a person’s sins.  The remedy for which is seeking repentance and forgiveness. - Mariful Quran Vol. 2. P. 201", explanation2: "This ayah teaches us that whenever any calamity befalls a person, then together with utilising physical means, one should also make du`a and ask for repentance as most of the calamities that befall a person are due to one’s sins. - Bayanul Qur’an P. 62 ", explanation3: "", explanation4: "", explanation5: ""},
    {id: 13, arabic: "رَبَّنَا مَا خَلَقْتَ هَذا بَاطِلاً سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ", name: "Robana 13", note: "Suratul Imran vs 191", transliteration:"RABBANA MA KHALAQTA HADHA BATILA SUBUHANAKA FAQINA `ADHABAN-NAR", translation: "Our Lord! You have not created all this (Universe) in  vain. Glory be to you! Save us Lord, from the torment of the Blazing Fire.", explanation1: "", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 14, arabic: "رَبَّنَا إِنَّكَ مَن تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ وَمَا لِلظَّالِمِينَ مِنْ أَنصَارٍ", name: "Robana 14", note: "Suratul Imran vs 192", transliteration:"RABBANA ’INNAKA MAN-TUDKHILIN-NARA FAQAD AKHZAYTAH. WA MA LIZZALIMINA MIN ANSAR.", translation: "Our Lord! Whomsoever You cause to enter Hell, him You have surely disgraced, and for the wrongdoers there shall be no helpers.", explanation1: "", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 15, arabic: "رَّبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلإِيمَانِ أَنْ آمِنُواْ بِرَبِّكُمْ فَآمَنَّا", name: "Robana 15", note: "Suratul Imran vs 193", transliteration:"RABBANA INNANA SAMI`NA MUNADIYAY-YUNADI LIL-IMANI ‘ANAMINU BIRABBIKUM FA AMANNA.", translation: "Our Lord! We have heard a proclaimer calling to faith (saying): 'Believe in your Lord;' so we have come to believe.", explanation1: "", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 16, arabic: "رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الأبْرَارِ", name: "Robana 16", note: "Suratul Imran vs 193", transliteration:"RABBANA FAGHFIR LANA DHUNUBANA WA KAFFIR `ANNA SAYYITINA WA TAWAFFANA MA`AL ABRAR.", translation: "Our Lord! Forgive us our sins, and wipe off our misdeeds from us and cause us (in all grace) to die with the righteous.", explanation1: "", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 17, arabic: "رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ وَلاَ تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لاَ تُخْلِفُ الْمِيعَاد", name: "Robana 17", note: "Suratul Imran vs 194", transliteration:"RABBANA WA ATINA MA WA`ADTTANA `ALA RUSULIKA WA LA TUKH-ZINA YAWMAL QIYAMAH: INNAKA LA TUKHLIFUL-MI`AD.", translation: "Our Lord! Grant us that which You have promised to us through Your Apostles and disgrace us not on the Day of Reckoning. Surely You never fail in Your Promise.", explanation1: " Rasulullah said “Destruction be to that person who recites these verses and does not ponder regarding them”. - Ayah 190 / 1) Ibn Kathir Vol. 1. P. 450", explanation2: "Abu Hurairah narrates, Rasulullah used to recite the last 10 ayaat of Surah Al Imran every night. - Al Imran Ibn Kathir Vol. 1. P. 451", explanation3: "The meaning of these du`a (from 13-17) includes all the objectives/needs that a person wishes for: The final objective of any person is twofold:", explanation4: "1) Gaining entry into Jannat. 2) Saving onself from the fire of Jahannum. ", explanation5: "And for these two objectives, there are two conditions. i) Obedience and ii) Being free from sin. Therefore, it adds up to four. All the above are rendered in the above ayaat. - Bayanul Qur’an Vol. 2. P. 85"},
    {id: 18, arabic: "رَبَّنَا آمَنَّا فَاكْتُبْنَا مَعَ الشَّاهِدِينَ", name: "Robana 18", note: "Suratul Maidah vs 83", transliteration:"RABBANA AMANNA FAKTUBNA MA`ASH-SHHIDIN", translation: "Our Lord! We have believed; so write us down with those who bear witness (to the truthfulness of Islam).", explanation1: " The word “Amanna” does not refer to the Ahlul-Kitab’s past Iman but it refers to their bringing Iman of the present and being included amongst the group of believers. The word Rabbana clarifies that they are bringing the true Iman and not the superficial Iman like the hypocrites.  By the word “Ash-shahidin” the ummah of Nabi is  meant, those who will give testimony regarding the conveyance of the message of Nabi. - Tafsir Mazhari Vol. 4. P. 18", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 19, arabic: "رَبَّنَا أَنزِلْ عَلَيْنَا مَآئِدَةً مِّنَ السَّمَاء تَكُونُ لَنَا عِيداً لِّأَوَّلِنَا وَآخِرِنَا وَآيَةً مِّنكَ وَارْزُقْنَا وَأَنتَ خَيْرُ الرَّازِقِينَ", name: "Robana 19", note: "Suratul Maidah vs 114", transliteration:"RABBANA ANZIL `ALAYNA MA’IDATAM-MINAS SAMA‘I TAKUNU LANA `IDAL-LI-’AWWALINA WA AKHIRINA WA AYATAM-MINKA WARZUQNA WA ’ANTA KHAYRUR-RAZIQAN.", translation: "O Allah: Lord and Cherisher of us all! Send down to us a tray of food from heaven, that it may become a day of rejoicing for all of us  and (let it be) a Sign from You; and grant us sustenance and indeed You are the Best Provider of all.", explanation1: " This du`a was made by Esa at the request of his helpers. They requested him to make du`a that Allah send down food from the skies so that they might eat and their hearts can be at ease and be satisfied that Esa had spoken regarding his Rabb (Allah).  When Esa saw that their objective was valid he made this du`a. - Mariful Qur’an Vol. 3. P. 267", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 20, arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", name: "Robana 20", note: "Suratul A’raf vs 23", transliteration:"RABBANA ¨ALAMNA ’ANFUSANA: WA ‘ILLAM TAGHFIR-LANA WA TARIAMN LANAKUNANNA MINAL-KHSIRIN.", translation: "Our Lord! We have wronged our own souls; and if You do not forgive us and have no mercy upon us, we shall certainly be of the losers.", explanation1: " This ayah proved that if a person’s minor sins are not forgiven, he will be punished for it as well. - Tafsir Mazhari Vol. 4. P. 283", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 21, arabic: "رَبَّنَا لاَ تَجْعَلْنَا مَعَ الْقَوْمِ الظَّالِمِينَ", name: "Robana 21", note: "Suratul A’raf vs 47", transliteration:"RABBANA LA TAJ`ALNA MA`AL-QAWMIZ-ZALIMIN", translation: "Our Lord! Place us not with the wrongdoing people.", explanation1: "This du`a will be made by the people of “the heights” (between Jannah and Jahannum) when their faces will be turned towards the fire of Jahannum.  The meaning of the du`a is that “O Allah do not include us among the dwellers of Jahannum who are all oppressors.” - Mariful Qur’an Vol. 3. P. 564", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 22, arabic: "رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ", name: "Robana 22", note: "Suratul A’raf vs 89", transliteration:"RABBANAF-TAH BAYNANA WA BAY-NA QAWMINA BIL HAQQI WA ’ANTA KHAYRUL-FATIHIN.", translation: "O our Lord! Decide between us and our people with truth, and You are Best to decide.", explanation1: "This du`a was made by Shuaib when his nation refused to accept the truth. Shuaib turned to Allah making  du`a. - Mariful Qur’an Vol. 3. P. 267", explanation2: " In reality Shuaib made du`a for the destruction of the rejectors from amongst his nation. Allah accepted this du`a and destroyed the nation by a great tremor. - Ibid  P.630", explanation3: "", explanation4: "", explanation5: ""},
    {id: 23, arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ", name: "Robana 23", note: "Suratul A’raf vs 126", transliteration:"RABBANA ’AFRIGH `ALAYNA SABRAW- WA TA-WAFFANA MUSLIMN", translation: "Our Lord! Pour out on us patience and cause us to die as Muslims (bowing to Your Will).", explanation1: " In this du`a, there is an indication to the fact that if Allah does not wish and will, then man’s courage and hope will be of no use.  Therefore du`a is being made for firmness and steadfastness.  Because it’s only steadfastness, patience and firmness which can make a person victorious over one’s opponents. Mariful Qur’an Vol. 4. P. 37", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 24, arabic: "رَبَّنَا لاَ تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ ; وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ", name: "Robana 24", note: "Suratul Yunus vs 85", transliteration:"RABBANA LA TAJ`ALNA FITNATAL-LIL-QAWMIZ-ZALIMIN; WA NAJJINA BIRAHMATIKA MINAL-QAWMIL-KAFIRIN.", translation: "Our Lord! Make us not trial for the wrongdoing people and deliver us by Your mercy from (the persecution of) the disbelieving folk.", explanation1: "Before making du`a, having total reliance on Allah is of utmost importance, so that the du`a may be accepted. - Tafsir Mazhari Vol.5. P. 535", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 25, arabic: "رَبَّنَا إِنَّكَ تَعْلَمُ مَا نُخْفِي وَمَا نُعْلِنُ وَمَا يَخْفَى عَلَى اللّهِ مِن شَيْءٍ فَي الأَرْضِ وَلاَ فِي السَّمَاء", name: "Robana 25", note: "Suratul Ibrahim vs 38", transliteration:"RABBANA ’INNAKA TA`LAMU MA NUKHFI WA MA NU`LIN: WA MA YAKHFA `ALAL-LAHI MIN SHAY‘IN FIL-ARDI WA LA FIS-SAMA’.", translation: "O our Lord! Verily You know what we conceal (in our hearts) and what we disclose. And nothing is hidden from Allah in the earth or in the heaven.", explanation1: " This was the du`a of Ibrahim ", explanation2: " Ibn Abbas says it refers to the sadness of leaving Ismail and his mother in a barren land. - Tafsir Mazhari Vol. 6. P. 316", explanation3: "", explanation4: "", explanation5: ""},
    {id: 26, arabic: "رَبَّنَا وَتَقَبَّلْ دُعَاء", name: "Robana 26", note: "Suratul Ibrahim vs 40", transliteration:"RABBANA WA TAQABBAL DU`A’. ", translation: "O our Lord! Accept my humble prayer.", explanation1: " In Tirmidhi there is a narration wherein Rasulullah says “Du`a is Ibadah”", explanation2: "Anas narrates that Nabi has said: Du`a is the essence (marrow) of Ibadah. - Tafsir Mazhari Vol. 6. P. 317", explanation3: "", explanation4: "", explanation5: ""},
    {id: 27, arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ", name: "Robana 27", note: "Suratul Ibrahim vs 41", transliteration:"RABBANAGFIR LI WA LIWALIDAYYA WA LIL-MU’MININA YAWMA YAQAMUL-HISAB", translation: "O our Lord! Forgive me and my parents and all the Muslims on the Day when Reckoning will take place.", explanation1: " This is also the du`a of Ibrahim ", explanation2: "From these ayaat that appear before this du`a we learn the etiquettes of du`a, it must be made with utmost humility and humbleness - also, the praises and glorification of Allah should be made with du`a.  By this, there is a greater possibility that the du`a will be accepted. - Mariful Qur’an Vol. 5. 256", explanation3: "", explanation4: "", explanation5: ""},
    {id: 28, arabic: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا", name: "Robana 28", note: "Suratul khaf vs 10", transliteration:"RABBANA ‘ATINA MIL-LADUNKA RAHMATAW- WAHAYYI’ LANA MIN ’AMRINA RASHADA", translation: "O our Lord! Grant us Mercy from Yourself and provide for us guidance in our affair!", explanation1: "This du`a was made by the companions of the cave when they took refuge in the cave.", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 29, arabic: "رَبَّنَا إِنَّنَا نَخَافُ أَن يَفْرُطَ عَلَيْنَا أَوْ أَن يَطْغَى", name: "Robana 29", note: "Suratul Ta ha vs 45", transliteration:"RABBANA INNANA NAKHAFU AY-YAFRUTA `ALAYNA ’AW ’AY-YATGHA", translation: "Our Lord! We fear lest he may commit excess against us, or treat us with a heavy hand.", explanation1: " This was the du`a that Musa and Harun made to Allah before going to Firoun.", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 30, arabic: "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ", name: "Robana 30", note: "Suratul Tahrim vs 11", transliteration:"RAB-BIBNI LI `INDAKA BAYTAN FIL JANNAH.", translation: "My Lord! Build for me a home near You in Paradise.", explanation1: "Firoun’s wife was a believer and her du’a to Allah was that she be given freedom from Firoun and also the acquisition of a house in Jannah.", explanation2: "It is said that Firoun used to punish his wife because he himself was impotent. During the punishment Firoun’s wife would make the above du’a and it would ease her suffering. - Jalalain Vol. 2.", explanation3: "", explanation4: "", explanation5: ""},
    {id: 31, arabic: "رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا إِنَّهَا سَاءتْ مُسْتَقَرًّا وَمُقَامًا", name: "Robana 31", note: "Suratul Muminun vs 109", transliteration:"RABBANA AMANNA FAGHFIR LANA WARHAMNA WA ’ANTA KHAYRUR-RAHIMIN", translation: "O our Lord! We have believed, so forgive us and have Mercy upon us, and surely You are the Best of the Merciful.", explanation1: "This is a du`a made by a group of Muslims. They used to continuously make this du`a.", explanation2: "In this du`a the believers are addressing Allah by saying, “O Allah we have brought Iman, hence forgive us and have mercy on us”.", explanation3: "", explanation4: "", explanation5: ""},
    {id: 32, arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا", name: "Robana 32", note: "Suratul Furqan vs 65", transliteration:"RABBANASRIF `ANNA `ADHABA JAHANNAMA ’INNA `ADHABAH KANA GHARAMA, INNAHA SAHAT MUSTAQARRAW WA MUQAMA.", translation: "O our Lord! Turn away from us the torment of the Hell; surely its torment is utter destruction.", explanation1: "This du`a is a supplication which should be continuously made by the believers.  Because one of their qualities, is that despite being obedient to Allah, they still remain in fear regarding  the punishment of Allah, and regarding the Akhirah. Because of this fear they become practical, and continue making du`a. - Mariful Qur’an. Vol. 6. P. 504", explanation2: " Ali t narrates that Nabi r has said:  Allah I sent wahi to one  Nabi of the Bani Israil (i.e. Dawud u) “Tell the obedient servants from your ummah not to only rely on their good actions, as on the day of reckoning,  whichever servant  I wish to punish  I will punish in conformance to my (justice) and tell the disobedient servants not to throw themselves into destruction by their own hands (i.e. they should not give up hope of forgiveness) as I will forgive major sins also if I wish, and I will not care (i.e. in giving anybody punishment or forgiving anybody - Abu Naim.) - Tafsir Mazhari Vol. 8 P. 486", explanation3: "", explanation4: "", explanation5: ""},
    {id: 33, arabic: "رَبَّنَا لَغَفُورٌ شَكُورٌ", name: "Robana 33", note: "Suratul Furqan vs 74", transliteration:"RABBANA HAB LANA MIN ’AZWAJINA WA DHURRIYYATINA QURRATA A`YUNIW-WAJ `ALNA LIL-MUTTAQINA IMAMA.", translation: "O our Lord! Grant us in our wives and offspring the coolness of eyes and make us a leader of those who guard themselves against evil.", explanation1: " Regarding the “coolness of the eyes” Hasan Basri  states:  The original coolness of the eyes is to see a persons family involved in the obedience of Allah. The health and welfare and happiness of the family is also included in it. - Mariful Qur’an Vol. 6. P. 509", explanation2: "Allah’s chosen servants are not only concerned with their own reformation and are satisfied by their good deeds alone. They are also concerned with the reformation and actions of their wives and children.  They continue to make an effort in this regard, and part of their effort is to make du`a also. - Ibid", explanation3: "Qurtubi states: There can be nothing more soothing / cooling to the eyes than seeing a person’s wife and children being obedient to Allah. - Mazhari Vol. 8 P. 499", explanation4: " “Coolness of the eyes” Ikramah says: The Mufassirin have not taken the meaning of beauty and grace.  But they say  it means “to be obedient to Allah. - Ibn Kathir Vol. 3 P. 342", explanation5: ""},
    {id: 34, arabic: "آمَنُوا رَبَّنَا وَسِعْتَ كُلَّ شَيْءٍ رَّحْمَةً وَعِلْمًا فَاغْفِرْ لِلَّذِينَ تَابُوا وَاتَّبَعُوا سَبِيلَكَ وَقِهِمْ عَذَابَ الْجَحِيمِ", name: "Robana 34", note: "Suratul Fatir vs 34", transliteration:"RABBANA LA-GHAFURUN SHAKUR", translation: "Our Lord is the Most-Forgiving, the Most-Appreciative.", explanation1: "When the dwellers of Jannah will be entering Jannah, they will be saying the above. - Mariful Qur’an Vol. 7 P. 350", explanation2: "Ibn Umar narrates that Nabi has said: The reciters of the kalimah will have no fear at the time of death, nor will they experience fear in the grave, nor on the plains of reckoning.  I am seeing them wiping the dust off their heads (at the time of arising from their graves) and they will be saying the above. - Ibn Kathir Vol. 3 P. 565 by Tabarani", explanation3: "", explanation4: "", explanation5: ""},
    {id: 35, arabic: "رَبَّنَا وَأَدْخِلْهُمْ جَنَّاتِ عَدْنٍ الَّتِي وَعَدتَّهُم وَمَن صَلَحَ مِنْ آبَائِهِمْ وَأَزْوَاجِهِمْ وَذُرِّيَّاتِهِمْ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ وَقِهِمُ السَّيِّئَاتِ وَمَن تَقِ السَّيِّئَاتِ يَوْمَئِذٍ فَقَدْ رَحِمْتَهُ وَذَلِكَ هُوَ الْفَوْزُ الْعَظِيمُ", name: "Robana 35", note: "Suratul Mumin vs 7", transliteration:"RABBANA WASI`TA KULLA SHAY’IR-RAHMATAW-WA`ILMAN FAGHFIR LILLADHINA TABU WATTABA`U SABILAKA WAQIHIM `ADHABAL-JAHIM!", translation: "O our Lord! You encompass everything in (Your) mercy and knowledge, so forgive those who repent (of disbelief) and follow Your path, and save them from the torment of Hell.", explanation1: "Those angels who carry the Throne of Allah make this du`a for the Muminin.", explanation2: " Mutif Bin Abdullah says: The most well wishing creation towards the believers are the angels and the most deceiving is Shaytan. - Mazhari Vol. 10 P. 219", explanation3: "", explanation4: "", explanation5: ""},
    {id: 36, arabic: "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِّلَّذِينَ آمَنُوا", name: "Robana 36", note: "Suratul Mumin vs 8", transliteration:"RABBANA WA ‘ADKHIL-HUM JANNATI `ADNI-NIL-LATI WA`AT-TAHUM WA MAN SALAHA MIN ABA‘IHIM WA’AZWAJIHIM WA DHURRIYYATIHIM. INNAKA ’ANTAL `AZIZUL HAKIM. WAQIHIMUS-SAYYIAT; WA MAN TAQIS-SAYYI’ATI YAWMA’IDHIN FAQAD RAHIMTAH. WA DHALIKA HUWAL-FAWZUL `AZIM", translation: "O our Lord! Make them enter the Everlasting Gardens, which You have promised them, and to those pardonable righteous of their parents and their wives and their offspring. Surely You are the All-Powerful, the All-Wise and save them from punishments and he whom You save from punishments this Day, to him You have indeed shown great mercy. And this is a mighty achievement.", explanation1: "This is also the du`a of the angels for the believers.", explanation2: "Saeed bin Jubair narrates: When a person will enter Jannah, he will enquire regarding the abode of his father / brother and son.  It will be said to him: “They did not reach your status as far as good deeds are concerned.”  The person will reply, “The good deeds I used to do were for myself as well as for them”.  Hence they will be joined with him. Thereafter Saeed recited the above ayah. - Ibn Kathir Vol. 4 P. 78", explanation3: "", explanation4: "", explanation5: ""},
    {id: 37, arabic: "رَبَّنَا إِنَّكَ رَؤُوفٌ رَّحِيم", name: "Robana 37", note: "Suratul Hashr vs 10", transliteration:"RABBANAGHFIR LANA WA LI’IKHWANI-NAL-LADHINA SABAQUNA BIL IMANI WA LA TAJ`AL FI QULUBINA GHILLAL-LIL-LADHINA AMANU RABBANA INNAKA RA’UFUR-RAHIM", translation: "Our Lord! Forgive us and those of our brethren who preceded us in faith, and do not put any spite in our hearts towards those who believe, O our Lord! Verily You are the Most-Kind, the Ever Merciful.", explanation1: "Al-ladhina-amanu” refers to the Muhajirin and Ansar.", explanation2: "Those angels who carry the Throne of Allah make this du`a for the Muminin.", explanation3: "Mutif Bin Abdullah says: The most well wishing creation towards the believers are the angels and the most deceiving is Shaytan. - Mazhari Vol. 10 P. 219", explanation4: "", explanation5: ""},
    {id: 38, arabic: "رَّبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ", name: "Robana 38", note: "Suratul Mumtahinah vs 4", transliteration:"RABBANA `ALAYKA TAWAKKALNA WA’ILAYKA ’ANABNA WA ’ILAYKAL-MASIR.", translation: "O our Lord! We put our trust but in You alone, and turn but to You alone, and to You alone is our return in the end.", explanation1: "This  was  the  du`a of  Ibrahim and his followers.", explanation2: "This du`a means: O Allah in all matters we put our trust in You, and we hand over all our matters to You. - Ibn Kathir Vol. 4. P. 372", explanation3: "", explanation4: "", explanation5: ""},
    {id: 39, arabic: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ", name: "Robana 39", note: "Suratul Mumtahinah vs 5", transliteration:"RABBANA LA TAJ`ALNA FITNATAL-LIL-LADHINA KAFARU WAGHFIRLANA. RABBANA INNAKA ’ANTAL-`AZIZUL-HAKIM", translation: "O our Lord! Put us not in a trial for the infidels, and forgive us, our Lord! Surely You alone are the Most Exalted, the All-Wise.", explanation1: "This is also part of the du`a made by Ibrahim u and his followers.  Mujahid (R.A) states that this ayah means: “Do not punish us through the hands of the kuffaar nor give us adhab (punishment) directly, otherwise the kuffaar will say that if these people were true believers, then no adhab would befall them”. - Mazhari Vol. P. 431", explanation2: "", explanation3: "", explanation4: "", explanation5: ""},
    {id: 40, arabic: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", name: "Robana 40", note: "Suratul Tahrim vs 8", transliteration:"RABBANA ATMIM LANA NURANA WAGHFIR LANA. INNAKA `ALA KULLI SHAY‘IN QADIR.", translation: "Our Lord! Perfect for us our light and forgive us; surely You are Potent over everything.", explanation1: "Mujahid states that the Believers will recite this du`a at the time when they will see that the celestial light of the Hypocrites had disappeared on the day of Qiyamah. - Ibn Kathir Vol. 4 P. 418/9", explanation2: "On the bridge of Sirat the Believers will see (Nur) celestial light in front of them as well as on their right hand side. When they will see that the (Nur) celestial light of the Hypocrites has disappeared they will recite this du`a. The (Nur) celestial light will be in proportion to a persons actions.  Therefore the du`a is being made to perfect the celestial light. - Mazhari Vol. 11 P. 594", explanation3: "", explanation4: "", explanation5: ""})
  }

    // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MedicinesPage');
  // }
  viewDetails($event, item){
    this.navCtrl.push(MedicinesDetailsPage, item)
  }
}
