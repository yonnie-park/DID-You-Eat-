export default function AdminFooter() {
  return (
    <div className="admin-footer">
      {/* <div className="admin-footer-header">{children}</div> */}
      <div className="admin-footer__container">
        <div className="admin-footer__note">
          Copyright © 2023 <span className="admin-footer__logo">Did You Eat?</span>
          All rights reserved.
        </div>
        <div className="admin-footer__items">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="6" fill="#daff5b"></rect>
            <path
              d="M31.4566 12.8508C30.5983 13.2329 29.6881 13.4838 28.7561 13.5952C29.7384 13.004 30.4736 12.0736 30.8247 10.9774C29.9028 11.5294 28.8922 11.9164 27.8387 12.1256C27.1311 11.3638 26.1932 10.8585 25.1708 10.6884C24.1484 10.5183 23.0988 10.6928 22.1852 11.1849C21.2715 11.677 20.545 12.459 20.1186 13.4095C19.6923 14.3599 19.5898 15.4255 19.8273 16.4405C17.9578 16.3462 16.1289 15.8574 14.4594 15.0056C12.7898 14.1539 11.3169 12.9584 10.1363 11.4966C9.71843 12.2189 9.49882 13.04 9.5 13.8758C9.5 15.5162 10.3297 16.9655 11.5911 17.814C10.8446 17.7903 10.1145 17.5874 9.46177 17.2223V17.2811C9.462 18.3736 9.83769 19.4325 10.5251 20.2781C11.2126 21.1237 12.1695 21.704 13.2336 21.9207C12.5407 22.1097 11.814 22.1375 11.1088 22.0021C11.4088 22.9425 11.9936 23.765 12.7812 24.3543C13.5689 24.9436 14.5199 25.2703 15.5012 25.2886C14.5259 26.0594 13.4092 26.6292 12.2149 26.9655C11.0206 27.3017 9.77221 27.3977 8.54102 27.2481C10.6902 28.639 13.1921 29.3774 15.7474 29.375C24.3963 29.375 29.126 22.165 29.126 15.9122C29.126 15.7086 29.1204 15.5027 29.1114 15.3013C30.032 14.6317 30.8265 13.8023 31.4577 12.852L31.4566 12.8508Z"
              fill="#333"></path>
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="6" fill="#daff5b"></rect>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5534 10.625C14.0488 10.625 9.58398 15.0898 9.58398 20.5944C9.58398 24.9981 12.4586 28.729 16.373 30.0745C16.8623 30.1357 17.0458 29.8299 17.0458 29.5852C17.0458 29.3406 17.0458 28.729 17.0458 27.8727C14.2935 28.4843 13.6818 26.5271 13.6818 26.5271C13.2537 25.3651 12.5809 25.0593 12.5809 25.0593C11.6635 24.4476 12.6421 24.4476 12.6421 24.4476C13.6207 24.5088 14.1711 25.4874 14.1711 25.4874C15.0886 27.0164 16.4953 26.5883 17.0458 26.3437C17.1069 25.6709 17.4127 25.2427 17.6574 24.9981C15.4555 24.7534 13.1314 23.8972 13.1314 20.044C13.1314 18.943 13.4984 18.0868 14.1711 17.3528C14.11 17.1693 13.743 16.1296 14.2935 14.784C14.2935 14.784 15.1497 14.5394 17.0458 15.8238C17.8409 15.5791 18.6971 15.518 19.5534 15.518C20.4097 15.518 21.2659 15.6403 22.061 15.8238C23.9571 14.5394 24.8133 14.784 24.8133 14.784C25.3638 16.1296 24.9968 17.1693 24.9357 17.414C25.5473 18.0868 25.9754 19.0042 25.9754 20.1051C25.9754 23.9583 23.6513 24.7534 21.4494 24.9981C21.8164 25.3039 22.1222 25.9155 22.1222 26.833C22.1222 28.1785 22.1222 29.2183 22.1222 29.5852C22.1222 29.8299 22.3057 30.1357 22.795 30.0745C26.7705 28.729 29.584 24.9981 29.584 20.5944C29.5228 15.0898 25.058 10.625 19.5534 10.625Z"
              fill="#333"></path>
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="6" fill="#daff5b"></rect>
            <path
              d="M27.0713 13.9293C25.6552 13.3588 24.1411 12.9441 22.5583 12.708C22.3638 13.0107 22.1367 13.4178 21.9802 13.7417C20.2975 13.5237 18.6302 13.5237 16.9785 13.7417C16.822 13.4178 16.5897 13.0107 16.3936 12.708C14.8089 12.9441 13.2931 13.3603 11.8771 13.9324C9.02103 17.6493 8.24679 21.274 8.63391 24.8472C10.5282 26.0655 12.364 26.8055 14.1689 27.2898C14.6145 26.7617 15.012 26.2002 15.3543 25.6084C14.7023 25.395 14.0777 25.1317 13.4876 24.826C13.6441 24.7261 13.7973 24.6217 13.9452 24.5142C17.5446 25.9641 21.4554 25.9641 25.0118 24.5142C25.1614 24.6217 25.3146 24.7261 25.4694 24.826C24.8775 25.1332 24.2513 25.3965 23.5992 25.6099C23.9416 26.2002 24.3373 26.7632 24.7846 27.2913C26.5912 26.8071 28.4287 26.067 30.323 24.8472C30.7773 20.705 29.5471 17.1136 27.0713 13.9293ZM15.8447 22.6497C14.7642 22.6497 13.8781 21.781 13.8781 20.7231C13.8781 19.6652 14.7453 18.795 15.8447 18.795C16.9441 18.795 17.8302 19.6637 17.8113 20.7231C17.813 21.781 16.9441 22.6497 15.8447 22.6497ZM23.1123 22.6497C22.0318 22.6497 21.1457 21.781 21.1457 20.7231C21.1457 19.6652 22.0128 18.795 23.1123 18.795C24.2117 18.795 25.0978 19.6637 25.0788 20.7231C25.0788 21.781 24.2117 22.6497 23.1123 22.6497Z"
              fill="#333"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
