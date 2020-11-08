<template>
<div class="title text-center"> 
   

        <!--******************************************** Head *****************************************************************-->

        <!--******************************************** Body *****************************************************************-->


        <!--******************************************** section1 *****************************************************************-->

    <!--navbar-->
     <section class="section_1 container-fluid p-0">
        <div class="d-taha taha-column">
        <div>
            <header>
                
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="home page ya farghaly#">منصة القائد </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                  
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class=".navbar-nav m-auto"></div>
    
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown nav-item active">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              حسابي
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a class="dropdown-item" href="#">تعديل البيانات</a>
                              <a class="dropdown-item" href="#">تسجيل الخروج</a>
                            </div>
                        </li>
                         
                        <li  class="nav-item ">
                            
                          <a class="nav-link" href="#videos"> قائمة الفيديوهات والدروس <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">البث المباشر <span class="sr-only">(current)</span></a>
                          </li>
                          
                          <li class="nav-item ">
                            <a class="nav-link" href="#">الإمتحانات <span class="sr-only">(current)</span></a>
                          </li>
                          
                          
                        <li class="nav-item">
                          <a class="nav-link" href="https://facebook.com/profile.php?id=100011999621037">من نحن</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="https://facebook.com/profile.php?id=100011999621037">تواصل معنا <span class="sr-only">(current)</span></a>
                          </li>
                        
                      </ul>
                     
                    </div>
                  </nav>
            </header></div></div>
            </section>


       <!--jumbotron-->
    <div class="container-fluid text-center heading">
        
      <h1 class="h1">منصة القائد <span>.</span>لتدريس اللغة الألمانية</h1>
      <h2 class="h2">لطلبة الثانوية العامة</h2>
    </div>
    <div class='wrapper d-flex align-items-stretch'>
        <nav id='SideBar'>
            
            <div class='p-4 pt-5'>
                <a href='#' class='img logo rounded-circle' ></a>
                <h2 class="text-center mb-5">قائمة الفيديوهات</h2>
                <ul class='list-unstyled components mb-5'>
                    <li class='active'>
                        <a href='#home' data-toggle='collapse' class="dropdown-toggle">الدرس الأول </a>
                        <ul class='collapse  list-unstyled' id='home'>
                          <li><a  class="img-fluid z-depth-1"  alt="video"
                            data-toggle="modal" data-target="#modal1"> الفيديو الأول </a></li>
                          <li><a href='#'>الثاني </a></li>
                        </ul>
                    </li>
                    <li class='active'>
                        <a href='#home' data-toggle='collapse' class="dropdown-toggle">الدرس الثاني </a>
                        <ul class='collapse  list-unstyled' id='home'>
                          <li><a href='#'>الفيديو الأول </a></li>
                          <li><a href='#'>الثاني </a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- Page Content -->
        
        <div id='content' class='p-4 img' >
            
            <button type='button' id='sidebarCollapse' class='btn btn-dark ' >
                <i class='fa fa-th-list'></i>
            </button>
            <div class="row">
     
                <!-- Grid column -->
                <div class="col-lg-4 col-md-12 mb-4">
              
                  <!--Modal: Name-->
                  <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
              
                      <!--Content-->
                      <div class="modal-content">
              
                        <!--Body-->
                        <div  class="modal-body mb-0 p-0">
              
                          <div   class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U"
                              allowfullscreen></iframe>
                          </div>
              
                        </div>
              
                        <!--Footer-->
                        <div class="modal-footer justify-content-center">
                          <span class="mr-4">!أنظر حولك</span>
                          <a type="button" class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>
                          <!--Twitter-->
                          <a type="button" class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>
                          <!--Google +-->
                          <a type="button" class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>
                          <!--Linkedin-->
                          <a type="button" class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>
              
                          <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">أغلق</button>
              
                        </div>
              
                      </div>
                      <!--/.Content-->
              
                    </div>
                  </div>
                  <!--Modal: Name-->
              
                  <a><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg" alt="video"
                      data-toggle="modal" data-target="#modal1"></a>
              
                </div>
                <!-- Grid column -->
              
                <!-- Grid column -->
                <div class="col-lg-4 col-md-6 mb-4">
              
                  <!--Modal: Name-->
                  <div class="modal fade" id="modal6" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
              
                      <!--Content-->
                      <div class="modal-content">
              
                        <!--Body-->
                        <div class="modal-body mb-0 p-0">
              
                          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/wTcNtgA6gHs"
                              allowfullscreen></iframe>
                          </div>
              
                        </div>
              
                        <!--Footer-->
                        <div class="modal-footer justify-content-center">
                          <span class="mr-4">!أنظر حولك</span>
                          <a type="button" class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>
                          <!--Twitter-->
                          <a type="button" class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>
                          <!--Google +-->
                          <a type="button" class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>
                          <!--Linkedin-->
                          <a type="button" class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>
              
                          <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">أغلق</button>
              
                        </div>
              
                      </div>
                      <!--/.Content-->
              
                    </div>
                  </div>
                  <!--Modal: Name-->
              
                  <a><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-2.jpg" alt="video"
                      data-toggle="modal" data-target="#modal6"></a>
              
                </div>
                <!-- Grid column -->
              
                <!-- Grid column -->
                <div class="col-lg-4 col-md-6 mb-4">
              
                  <!--Modal: Name-->
                  <div class="modal fade" id="modal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
              
                      <!--Content-->
                      <div class="modal-content">
              
                        <!--Body-->
                        <div class="modal-body mb-0 p-0">
              
                          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM"
                              allowfullscreen></iframe>
                          </div>
              
                        </div>
              
                        <!--Footer-->
                        <div class="modal-footer justify-content-center">
                          <span class="mr-4">أنظر حولك</span>
                          <a type="button" class="btn-floating btn-sm btn-fb"><i class="fab fa-facebook-f"></i></a>
                          <!--Twitter-->
                          <a type="button" class="btn-floating btn-sm btn-tw"><i class="fab fa-twitter"></i></a>
                          <!--Google +-->
                          <a type="button" class="btn-floating btn-sm btn-gplus"><i class="fab fa-google-plus-g"></i></a>
                          <!--Linkedin-->
                          <a type="button" class="btn-floating btn-sm btn-ins"><i class="fab fa-linkedin-in"></i></a>
              
                          <button type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">أغلق</button>
              
                        </div>
              
                      </div>
                      <!--/.Content-->
              
                    </div>
                  </div>
                  <!--Modal: Name-->
              
                  <a><img class="img-fluid z-depth-1" src="https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg" alt="video"
                      data-toggle="modal" data-target="#modal4"></a>
              
                </div>
                <!-- Grid column -->
        </div>   
         </div>
         
         
    
       
    </div>
    
    <section class="section_6 ">
        <div class="d-sm-flex flex-row text-white">
            <div class="footer">
                <label for="Prod">الصف الدراسي</label>
                <ul>
                    <li>الصف الأول الثانوي</li>
                    <li>الصف الثاني الثانوي</li>
                    <li>الصف الثالث الثانوي</li>
                    
                </ul>
            </div>
            <div class="footer">
                <label for="info">صفحات المساعدة</label>
                <ul>
                    <li>أخر الأخبار</li>
                    <li>الشروط والأحكام</li>
                    <li>الخصوصية</li>
                    
                </ul>
            </div>
            <div class="footer">
                <label for="sup">تواصل معنا </label>
                <ul>
                    <li>أسيوط- الوليدية</li>
                    <li>+201005010189</li>
                    <li>WhatsApp : +201012996733</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </section>

    <div class="copyrights">
     <div class="container">
       <p> .Copyrights Parallel X. All rights reserved & copy</p>
       <div class="credits">Designed by <a href="https://www.facebook.com/Mobd3Ismail/" target="_blank">Mobd3Ismail</a>
       </div>
     </div>
   </div>





 <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>


</div>

</template>

<script>
export default {
    mounted() {
        document.getElementById('sidebarCollapse').onclick=function(){
    let element=document.getElementById('SideBar')
    if(element.classList.contains('active')){
        element.classList.remove('active')
    }else    {
        element.classList.add('active')
    }
}
    },
}
</script>

<style scoped lang="css">
    @import url('../assets/styles/videos.css');
   @import url( https://fonts.googleapis.com/css2?family=Lemonada:wght@700&family=Rakkas&display=swap);
        @import url('../assets/styles/css/styles.css');
        
        

    .title {
        font-size: 40px;
    }
</style>

