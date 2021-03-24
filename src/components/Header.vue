<template>
   <div class="header">
      <div class="row">
         <div class="col-md-4 col-3">
            <div class="logo">
               <a href="#"> LINKEDU</a>
            </div>
         </div>
         <div class="col-md-8 col-9">
            <div class="header-right">
               <div id="nav">
                  <router-link to="/">英國升學</router-link>
                  <router-link to="/about">澳洲升學</router-link>
               </div>
               <div class="search-icon">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M14 8.48479C14 11.7029 11.3426 14.3636 8 14.3636C4.65739 14.3636 2 11.7029 2 8.48479C2 5.26671 4.65739 2.60602 8 2.60602C11.3426 2.60602 14 5.26671 14 8.48479ZM12.8995 14.7136C11.5458 15.7478 9.84592 16.3636 8 16.3636C3.58172 16.3636 0 12.8361 0 8.48479C0 4.13346 3.58172 0.606018 8 0.606018C12.4183 0.606018 16 4.13346 16 8.48479C16 10.3027 15.3748 11.9769 14.3246 13.31L17.7017 16.6359C18.0952 17.0234 18.1 17.6566 17.7125 18.0501C17.325 18.4436 16.6918 18.4484 16.2983 18.0609L12.8995 14.7136Z" fill="white"></path>
                  </svg>
               </div>
               <div class='drop-icon' @click="active = !active" :aria-pressed="active ? 'true' : 'false'">
                  <svg width="25" height="11" viewBox="0 0 25 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M1 0.515076C0.447715 0.515076 0 0.962791 0 1.51508C0 2.06736 0.447715 2.51508 1 2.51508H24C24.5523 2.51508 25 2.06736 25 1.51508C25 0.962791 24.5523 0.515076 24 0.515076H1ZM1 8.39384C0.447715 8.39384 0 8.84156 0 9.39384C0 9.94613 0.447715 10.3938 1 10.3938H14C14.5523 10.3938 15 9.94613 15 9.39384C15 8.84156 14.5523 8.39384 14 8.39384H1Z" fill="white"></path>
                  </svg>
               </div>
            </div>
         </div>
         <div :class="{ block: active }">
         <div class="box-menu">
            <div class="drop-menu">
               <ul>
                  <li>
                     <a href="#">主頁</a>
                  </li>
                  <li><a href="#">成功案例</a></li>
                  <li><a href="#">專家分享</a></li>
                  <li><a href="#">常見疑問</a></li>
                  <li><a href="#">專業團隊</a></li>
               </ul>
            </div>
            <div class="address-text">
               <h4>中環總辦事處</h4>
               <p>中環站C出口</p>
               <p>中環德輔道中88–98號 中環88 11樓全層</p>
            </div>
            <div class="address-text">
               <h4>中環考試中心</h4>
               <p>中環站B出口</p>
               <p>中環德輔道中113–125A號 遠東發展大廈17樓05室</p>
            </div>
            <div class="button-btn"><button>訂閲最新資訊 </button></div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   export default {
     name: 'Header',
     data(){
        return{
           active: false
        }
     }
   }

</script>

