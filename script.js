document.addEventListener('DOMContentLoaded', function() {

// Initialize i18next
i18next.init({
    lng: 'en', // Default language is English
    resources: {
        en: {
            translation: {
              // English translations
              'header.title': 'My Portfolio',
              'cv.title': 'Click here to download my CV',
    'cv.link1': 'English CV',
    'cv.link2': 'French CV',
              'about.title': 'About Me',
              'about.content': 'Engineering student, Working student, web development enthusiast, looking for new opportunities',
              'projects.title': 'Projects',
              'projects.project1.title': 'Project 1: Portfolio',
              'projects.project1.content': 'A web page containing some information regarding myself and some projects that I have developed or am currently developing',
              'projects.project2.title': 'Project 2: ProductTODO',
              'projects.project2.content': 'It is a web app that I am currently developing using Spring Boot and Angular frameworks. For more details, please check the README associated with the project',
              'projects.project3.title': 'Project 3: Ecommerce Site',
              'projects.project3.content': 'It is a web app developed for learning purposes using Spring Boot and Angular frameworks. For more details, please check the README associated with the project',
              'projects.project4.title': 'Project 4: Affariet',
              'projects.project4.content': 'It is an Android mobile app developed using Kotlin and Node.js for the back-end. It was hosted briefly on AppGallery, but it is no longer supported. For more details, please check the README associated with the project',
              'projects.project5.title': 'Project 5: Pharmanet',
              'projects.project5.content': 'It is a web app that was developed as a school assignment using Symfony 4, Twig, Ajax, CSS. It is no longer supported. For more details, please check the README associated with the project',
              'projects.project6.title': 'Project 6: MovieAndChill',
              'projects.project6.content': 'It is a web app that I developed using Symfony 4, Twig, CSS, and Bootstrap. It is no longer supported. For more details, please check the README associated with the project',
              'contact.title': 'Contact Me Via Email',
              'contact.content': 'mehrezmathlouthi07@gmail.com',
              'footer.text': '© 2023 Mahrez Mathlouthi'
            }
          },
      ar: {
        translation: {
          // Arabic translations
          // Arabic translations
    'header.title': 'ملف تعريفي عني',
    'cv.title': 'انقر هنا لتحميل السيرة الذاتية',
'cv.link1': 'السيرة الذاتية باللغة الإنجليزية',
'cv.link2': 'السيرة الذاتية باللغة الفرنسية',
    'about.title': 'حولي',
    'about.content': 'طالب هندسة، طالب عامل، مهتم بتطوير الويب، أبحث عن فرص جديدة',
    'projects.title': 'المشاريع',
    'projects.project1.title': 'المشروع 1: الملف الشخصي',
    'projects.project1.content': 'صفحة ويب تحتوي على بعض المعلومات المتعلقة بنفسي وبعض المشاريع التي قمت بتطويرها أو أعمل على تطويرها حاليًا',
    'projects.project2.title': 'المشروع 2: ProductTODO',
    'projects.project2.content': 'هو تطبيق ويب أقوم حاليًا بتطويره باستخدام إطارات Spring Boot و Angular. لمزيد من التفاصيل، يرجى مراجعة README المرتبط بالمشروع',
    'projects.project3.title': 'المشروع 3: موقع التجارة الإلكترونية',
    'projects.project3.content': 'هو تطبيق ويب تم تطويره لأغراض التعلم باستخدام إطارات Spring Boot و Angular. لمزيد من التفاصيل، يرجى مراجعة README المرتبط بالمشروع',
    'projects.project4.title': 'المشروع 4: Affariet',
    'projects.project4.content': 'هو تطبيق محمول لنظام Android تم تطويره باستخدام Kotlin و Node.js للجانب الخلفي. تم استضافته لفترة قصيرة في AppGallery ، لكنه لم يعد مدعومًا. لمزيد من التفاصيل، يرجى مراجعة README المرتبط بالمشروع',
    'projects.project5.title': 'المشروع 5: Pharmanet',
    'projects.project5.content': 'هو تطبيق ويب تم تطويره كمهمة مدرسية باستخدام Symfony 4 و Twig و Ajax و CSS. لم يعد مدعومًا. لمزيد من التفاصيل، يرجى مراجعة README المرتبط بالمشروع',
         'projects.project6.title': 'المشروع 6: MovieAndChill',
         'projects.project6.content': 'هذا تطبيق ويب قمت بتطويره باستخدام Symfony 4، Twig، CSS و Bootstrap. لم يعد مدعومًا. لمزيد من التفاصيل، يرجى الاطلاع على ملف README المرتبط بالمشروع',
         'contact.title': 'اتصل بي عبر البريد الإلكتروني',
         'contact.content': 'mehrezmathlouthi07@gmail.com',
         'footer.text': '© 2023 Mahrez Mathlouthi'
         
        }
      },
      fr: {
        translation: {
          // French translations
          'header.title': 'Mon Portfolio',
          'cv.title': 'Cliquez ici pour télécharger mon CV',
'cv.link1': 'CV en anglais',
'cv.link2': 'CV en français',
          'about.title': 'À Propos de Moi',
          'about.content': 'Étudiant en ingénierie informatique, Étudiant travailleur, passionné de développement web, à la recherche de nouvelles opportunités',
          'projects.title': 'Projets',
          'projects.project1.title': 'Projet 1 : Portfolio',
          'projects.project1.content': 'Une page web contenant des informations me concernant et certains projets que j\'ai développés ou que je développe actuellement',
          'projects.project2.title': 'Projet 2 : ProductTODO',
          'projects.project2.content': 'Il s\'agit d\'une application web que je développe actuellement en utilisant les frameworks Spring Boot et Angular. Pour plus de détails, veuillez consulter le README associé au projet',
          'projects.project3.title': 'Projet 3 : Site E-commerce',
          'projects.project3.content': 'Il s\'agit d\'une application web développée à des fins d\'apprentissage en utilisant les frameworks Spring Boot et Angular. Pour plus de détails, veuillez consulter le README associé au projet',
          'projects.project4.title': 'Projet 4 : Affariet',
          'projects.project4.content': 'Il s\'agit d\'une application mobile Android développée en utilisant Kotlin et Node.js pour le back-end. Elle a été hébergée brièvement sur AppGallery, mais elle n\'est plus prise en charge. Pour plus de détails, veuillez consulter le README associé au projet',
          'projects.project5.title': 'Projet 5 : Pharmanet',
          'projects.project5.content': 'Il s\'agit d\'une application web développée dans le cadre d\'un projet scolaire en utilisant Symfony 4, Twig, Ajax, CSS. Elle n\'est plus prise en charge. Pour plus de détails, veuillez consulter le README associé au projet',
          'projects.project6.title': 'Projet 6 : MovieAndChill',
          'projects.project6.content': 'Il s\'agit d\'une application web que j\'ai développée en utilisant Symfony 4, Twig, CSS et Bootstrap. Elle n\'est plus prise en charge. Pour plus de détails, veuillez consulter le README associé au projet',
          'contact.title': 'Contactez-moi par Email',
          'contact.content': 'mehrezmathlouthi07@gmail.com',
          'footer.text': '© 2023 Mahrez Mathlouthi'
        }
      },
      
    }
  });
  
  // Function to translate the page content
  function translatePage(language) {
    i18next.changeLanguage(language, function (err, t) {
      if (err) return console.log('Error loading translation:', err);
  
      // Translate each element based on its id
      document.getElementById('headerTitle').textContent = t('header.title');
      document.getElementById('aboutTitle').textContent = t('about.title');
      document.getElementById('aboutContent').textContent = t('about.content');
      document.getElementById('projectsTitle').textContent = t('projects.title');
      document.getElementById('project1Title').textContent = t('projects.project1.title');
      document.getElementById('project1Content').textContent = t('projects.project1.content');
      document.getElementById('project2Title').textContent = t('projects.project2.title');
      document.getElementById('project2Content').textContent = t('projects.project2.content');
      document.getElementById('project3Title').textContent = t('projects.project3.title');
      document.getElementById('project3Content').textContent = t('projects.project3.content');
      document.getElementById('project4Title').textContent = t('projects.project4.title');
      document.getElementById('project4Content').textContent = t('projects.project4.content');
      document.getElementById('project5Title').textContent = t('projects.project5.title');
      document.getElementById('project5Content').textContent = t('projects.project5.content');
      document.getElementById('project6Title').textContent = t('projects.project6.title');
      document.getElementById('project6Content').textContent = t('projects.project6.content');
      document.getElementById('contactTitle').textContent = t('contact.title');
      document.getElementById('contactContent').textContent = t('contact.content');
      document.getElementById('footerText').textContent = t('footer.text');
      const cvSection = document.getElementById('cv');
      cvSection.querySelector('#cvTitle').textContent = t('cv.title');
      const cvLinks = cvSection.querySelector('.cv-links');
      cvLinks.querySelector('.cv-link:first-child').textContent = t('cv.link1');
      cvLinks.querySelector('.cv-link:last-child').textContent = t('cv.link2');
    });
  }
  
  // Language selector event listener
  document.getElementById('languageSelector').addEventListener('change', function (event) {
    var selectedLanguage = event.target.value;
  
    // Translate the page based on the selected language
    translatePage(selectedLanguage);
  });
});
