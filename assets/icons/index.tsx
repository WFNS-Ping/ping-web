import { SVGProps } from "react";

const HideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19.97 21.385L16.614 18.029C15.1661 18.6882 13.5908 19.0204 12 19.002C10.3599 19.0223 8.73671 18.6684 7.254 17.967C6.10468 17.4062 5.07264 16.6317 4.213 15.685C3.30049 14.7068 2.5833 13.5633 2.1 12.316L2 12.002L2.105 11.686C2.82781 9.84224 4.04426 8.23312 5.621 7.03495L3 4.41395L4.413 3.00195L21.382 19.971L19.972 21.385H19.97ZM7.036 8.45095C5.75792 9.34687 4.74865 10.5747 4.117 12.002C5.47142 15.1269 8.59587 17.1086 12 17.002C13.0498 17.0106 14.0936 16.8415 15.087 16.502L13.287 14.702C12.8863 14.8984 12.4462 15.0009 12 15.002C10.3475 14.9916 9.01037 13.6545 9 12.002C9.00048 11.5547 9.10309 11.1135 9.3 10.712L7.036 8.45095ZM19.852 15.612L18.46 14.221C19.0456 13.5589 19.5256 12.8104 19.883 12.002C18.5304 8.87553 15.4047 6.89303 12 7.00195C11.753 7.00195 11.505 7.01095 11.265 7.02795L9.5 5.26095C10.3216 5.08519 11.1598 4.99835 12 5.00195C13.6401 4.9816 15.2633 5.33557 16.746 6.03695C17.8953 6.59769 18.9274 7.37215 19.787 8.31895C20.6991 9.29592 21.4163 10.438 21.9 11.684L22 12.002L21.895 12.318C21.4268 13.536 20.7342 14.6554 19.853 15.618L19.852 15.612Z"
      fill="black"
    />
  </svg>
);

const ShowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12 19.0001C10.3599 19.0205 8.7367 18.6665 7.254 17.9651C6.10469 17.4043 5.07265 16.6299 4.213 15.6831C3.30243 14.7042 2.58547 13.5618 2.1 12.3161L2 12.0001L2.105 11.6841C2.59082 10.4395 3.30624 9.29737 4.214 8.3171C5.07334 7.37041 6.10504 6.59596 7.254 6.0351C8.73671 5.33369 10.3599 4.97971 12 5.0001C13.6401 4.97975 15.2633 5.33372 16.746 6.0351C17.8953 6.59584 18.9274 7.37029 19.787 8.3171C20.6993 9.29466 21.4165 10.4375 21.9 11.6841L22 12.0001L21.895 12.3161C20.3262 16.3999 16.3742 19.0694 12 19.0001ZM12 7.0001C8.59587 6.89343 5.47142 8.8752 4.117 12.0001C5.4712 15.1252 8.59579 17.1071 12 17.0001C15.4041 17.1065 18.5284 15.1248 19.883 12.0001C18.5304 8.87368 15.4047 6.89118 12 7.0001ZM12 15.0001C10.5573 15.0097 9.30937 13.9975 9.02097 12.5839C8.73256 11.1703 9.48427 9.75012 10.8154 9.19376C12.1465 8.6374 13.6852 9.10024 14.4885 10.2986C15.2919 11.497 15.1354 13.0962 14.115 14.1161C13.5563 14.6814 12.7948 14.9997 12 15.0001Z"
      fill="black"
    />
  </svg>
);

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 14" {...props}>
    <path
      d="M5.79995 10.9L1.59995 6.69999L0.199951 8.09999L5.79995 13.7L17.8 1.69999L16.4 0.299988L5.79995 10.9Z"
      fill="currentColor"
    />
  </svg>
);

const LogoWhite = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M0.5 17.1766L0.529798 11.0141V4.76155C0.549664 4.75155 0.644025 4.74655 0.812883 4.74655H1.36415C1.57274 4.74655 1.73166 4.73656 1.84093 4.71657L3.68842 4.6416C4.1652 4.6216 4.53271 4.61161 4.79096 4.61161H7.15993L11.5403 4.50665C12.1363 4.50665 12.7918 4.53164 13.507 4.58162H13.6113C13.949 4.56163 14.1625 4.55163 14.2519 4.55163C16.2385 4.55163 17.937 5.18638 19.3474 6.45588C20.0328 7.06564 20.5741 7.85033 20.9715 8.80995C21.3688 9.76957 21.5674 10.7642 21.5674 11.7938C21.5674 12.8134 21.4631 13.683 21.2545 14.4027C21.046 15.1225 20.7778 15.7322 20.45 16.232C19.1389 18.2512 16.601 19.4308 12.8365 19.7706L9.61829 19.9056C9.51896 22.3046 9.4693 24.1689 9.4693 25.4984L9.4842 25.9632V27.1777C9.44447 27.3176 9.36997 27.4126 9.26071 27.4626L0.753286 27.5975C0.584429 27.1177 0.5 26.348 0.5 25.2884V17.1766ZM13.5368 10.7442C13.1395 9.6946 12.0866 9.13482 10.3781 9.06485C10.1298 9.05485 9.78715 9.04985 9.35011 9.04985C9.23091 9.04985 9.15642 10.5243 9.12662 13.4731L9.09682 14.5977L9.14152 15.4973C10.3632 15.4773 11.436 15.2174 12.3597 14.7176C13.2934 14.2178 13.7603 13.3082 13.7603 11.9887C13.7603 11.4289 13.6858 11.0141 13.5368 10.7442Z"
      fill="#F9F9F9"
    />
    <path
      d="M39.2394 9.15481L43.2324 9.13982C43.282 9.34974 43.3714 9.67961 43.5005 10.1294C43.6297 10.5793 43.7538 11.0291 43.873 11.4789L44.1561 12.6035C44.5534 11.5938 44.7968 11.0341 44.8862 10.9241L45.1246 10.6242C46.1278 9.20479 47.6673 8.49507 49.7433 8.49507C50.7266 8.49507 51.6603 8.79495 52.5443 9.39472C53.4383 9.98448 54.1336 10.7592 54.6302 11.7188C55.1269 12.6684 55.3752 13.673 55.3752 14.7326C55.3752 14.8526 55.3603 14.9475 55.3305 15.0175V24.2389L55.3454 27.1027H46.6294L46.5996 19.6057L46.6592 18.0763C46.6592 16.5469 46.2569 15.7822 45.4523 15.7822C44.5882 15.7822 44.1561 16.5069 44.1561 17.9563C44.1561 18.2762 44.1611 18.4961 44.171 18.6161V18.841L44.1859 19.0959V27.0877L39.746 27.1027H35.2911L35.2762 18.1063V9.13982L39.2394 9.15481Z"
      fill="#F9F9F9"
    />
    <path
      d="M69.5903 25.1985L69.6499 24.3288C69.6499 24.1789 69.6052 23.774 69.5158 23.1143C69.3867 23.3442 69.2079 23.5741 68.9794 23.804C68.7609 24.0339 68.5772 24.1689 68.4282 24.2089C67.3455 24.6887 66.0294 24.9286 64.4799 24.9286C62.9403 24.9286 61.5547 24.6137 60.323 23.984C59.1013 23.3442 58.1179 22.4246 57.373 21.225C56.638 20.0255 56.2704 18.746 56.2704 17.3866C56.2704 16.0271 56.4691 14.8226 56.8664 13.773C57.2737 12.7134 57.8349 11.7938 58.55 11.0141C59.2751 10.2344 60.1691 9.61963 61.2319 9.16981C62.2947 8.71998 63.4568 8.49507 64.7183 8.49507C66.7346 8.49507 68.4182 9.05985 69.7691 10.1894C70.0174 10.4593 70.2757 10.6842 70.5438 10.8641L70.7524 10.2044V9.15481H74.6113L78.4851 9.13982L78.5 23.1293C78.5 23.2992 78.4901 23.5641 78.4702 23.924V23.984C78.4603 24.1739 78.4553 24.4738 78.4553 24.8836V25.0485L78.4851 25.8432L78.3957 26.6829C78.3957 26.7329 78.3957 26.7629 78.3957 26.7729C78.4056 26.7828 78.3659 27.0078 78.2765 27.4476C78.1871 27.8874 78.0779 28.2773 77.9487 28.6171C77.5415 29.7167 76.732 30.7163 75.5202 31.6159C74.3084 32.5256 73.2555 33.0454 72.3615 33.1753C72.2622 33.2753 72.0685 33.3503 71.7805 33.4002C71.4924 33.4602 71.3186 33.5002 71.259 33.5202V33.5052C70.2955 33.8251 69.3718 33.985 68.4878 33.985C67.6137 33.985 67.1617 33.975 67.1319 33.955H66.685C66.5956 33.985 66.3572 34 65.9698 34C65.5924 34 64.8971 33.885 63.8839 33.6551L63.4071 33.5502C62.6821 33.4002 62.0215 33.1853 61.4256 32.9054C60.0151 32.3357 58.9076 31.576 58.103 30.6263C57.2985 29.6767 56.7522 28.3622 56.4641 26.6829L56.4343 26.5479C56.7522 26.5679 57.219 26.5779 57.8349 26.5779L60.2783 26.5329H66.8787L66.8638 26.5929C66.8638 27.1127 66.973 27.5825 67.1915 28.0024C67.42 28.4322 67.718 28.6471 68.0855 28.6471C68.7311 28.6471 69.1682 28.2773 69.3966 27.5375C69.5754 26.9578 69.6648 26.343 69.6648 25.6933V25.3934C69.635 25.3934 69.6201 25.4134 69.6201 25.4534C69.6002 25.4234 69.5903 25.3384 69.5903 25.1985ZM70.0075 17.0417L70.0224 16.8618C69.933 13.9629 69.2973 12.5135 68.1153 12.5135C67.7776 12.5135 67.4796 12.6384 67.2213 12.8883C66.8042 13.2882 66.5161 13.8879 66.3572 14.6876C66.2082 15.4873 66.1337 16.182 66.1337 16.7718L66.1784 17.2966V17.4315L66.1635 17.5365V17.6265C66.1635 18.4461 66.3572 19.2458 66.7446 20.0255C67.1319 20.7952 67.6236 21.1801 68.2196 21.1801C68.8751 21.1801 69.4214 20.3604 69.8585 18.721H69.784C69.933 18.3312 70.0075 17.9313 70.0075 17.5215V17.0417Z"
      fill="#F9F9F9"
    />
    <path
      d="M24.5354 9.48362L32.3611 5.31434L29.8622 27.5511L24.5354 9.48362Z"
      fill="#F9F9F9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.6024 1.39581C23.0703 2.23282 22.5025 4.16131 23.3342 5.7032C24.1659 7.24509 26.0822 7.81651 27.6143 6.97949L29.4638 5.96912C30.9959 5.13211 31.5637 3.20362 30.732 1.66173C29.9003 0.11984 27.984 -0.451574 26.4518 0.385442L24.6024 1.39581ZM24.8579 2.85791C24.3871 3.15671 24.2461 3.78306 24.543 4.25689C24.8399 4.73072 25.4623 4.87261 25.9331 4.57381L26.5015 4.21312C26.9723 3.91432 27.1133 3.28797 26.8164 2.81414C26.5195 2.34031 25.8971 2.19842 25.4262 2.49722L24.8579 2.85791Z"
      fill="#F9F9F9"
    />
  </svg>
);

const LogoBlack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2.85427 19.3166C1.36158 19.3166 0.615234 19.1531 0.615234 18.8262V2.93685C0.615234 2.38105 0.869484 2.10315 1.37798 2.10315H5.70843C8.13611 2.10315 9.88305 2.60173 10.9493 3.5989C12.0319 4.59607 12.5732 6.04278 12.5732 7.93904C12.5732 9.50835 12.0647 10.9469 11.0477 12.2547C10.5392 12.9085 9.79283 13.4316 8.80864 13.824C7.82445 14.2163 6.67622 14.4125 5.36396 14.4125V18.8016C5.36396 18.9978 5.0523 19.1368 4.42898 19.2185C3.82206 19.2839 3.29716 19.3166 2.85427 19.3166ZM5.36396 6.36972V10.244H5.68383C6.25794 10.244 6.74183 10.0642 7.13551 9.70452C7.52919 9.34488 7.72603 8.83813 7.72603 8.18424C7.72603 7.53036 7.5866 7.06447 7.30774 6.78657C7.04529 6.50867 6.5696 6.36972 5.88067 6.36972H5.36396Z"
      fill="black"
    />
    <path
      d="M18.3695 19.1695L14.6231 5.44975C14.6231 5.33532 15.39 5.08986 16.9278 4.68119C18.3695 4.29805 19.2345 4.10649 19.5228 4.0107L18.3695 19.1695Z"
      fill="black"
    />
    <path
      d="M26.4933 18.9978C26.4933 19.1122 25.9028 19.1695 24.7218 19.1695C23.0815 19.1204 22.2613 19.0305 22.2613 18.8997V10.9551H21.6216C21.1951 10.9551 20.9163 10.5954 20.785 9.87616C20.7522 9.66365 20.7358 9.45114 20.7358 9.23863C20.7358 8.73187 20.8342 8.22511 21.0311 7.71835C21.3263 6.99908 21.7856 6.63945 22.409 6.63945C23.0323 6.63945 23.59 6.78657 24.0821 7.08082C24.5742 7.37506 24.9022 7.66931 25.0663 7.96356C26.0997 7.08082 27.3299 6.63945 28.757 6.63945C30.1841 6.63945 31.2175 7.0236 31.8572 7.79191C32.4969 8.56022 32.8168 9.81895 32.8168 11.5681V18.9242C32.8168 19.1204 32.1115 19.2185 30.7008 19.2185C29.3065 19.2185 28.6094 19.1204 28.6094 18.9242V11.8378C28.6094 11.0205 28.3223 10.6118 27.7482 10.6118C27.5842 10.6118 27.3545 10.6853 27.0593 10.8325C26.764 10.9632 26.5754 11.0613 26.4933 11.1267V18.9978Z"
      fill="black"
    />
    <path
      d="M39.4301 19.2675C37.839 19.2675 36.6087 18.7608 35.7394 17.7473C34.87 16.7174 34.4353 15.2053 34.4353 13.211C34.4353 11.2003 35.0012 9.63096 36.1331 8.50301C37.2813 7.35872 38.7986 6.78657 40.6849 6.78657C42.5877 6.78657 44.1542 7.20342 45.3845 8.03712V20.2484C45.3845 21.458 44.8924 22.3816 43.9082 23.0192C42.924 23.6731 41.6609 24 40.119 24C38.5771 24 37.1993 23.8038 35.9854 23.4115C35.8214 23.0192 35.7394 22.6677 35.7394 22.3571C35.7394 21.3109 35.9116 20.5426 36.2561 20.0522C37.3551 20.5263 38.5279 20.7633 39.7746 20.7633C40.6767 20.7633 41.1278 20.4445 41.1278 19.807V19.0714C40.4225 19.2021 39.8566 19.2675 39.4301 19.2675ZM40.5619 10.7834C39.4629 10.7834 38.9134 11.6089 38.9134 13.26C38.9134 14.2899 39.1266 14.9601 39.5531 15.2707C39.832 15.4832 40.1108 15.5895 40.3897 15.5895C40.6685 15.5895 40.9146 15.5649 41.1278 15.5159V10.857C40.931 10.8079 40.7424 10.7834 40.5619 10.7834Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.9873 0.557428C14.0419 0.809018 13.4801 1.77675 13.7326 2.71892C13.9851 3.66108 14.9562 4.2209 15.9015 3.96931L17.7699 3.4721C18.7154 3.2205 19.2771 2.25277 19.0246 1.31061C18.7721 0.36844 17.8012 -0.191376 16.8557 0.060213L14.9873 0.557428ZM14.9668 1.32986C14.645 1.43627 14.4707 1.78248 14.5775 2.10315C14.6843 2.42382 15.0316 2.59752 15.3535 2.49111C15.6752 2.38471 15.8495 2.0385 15.7427 1.71783C15.636 1.39716 15.2886 1.22346 14.9668 1.32986Z"
      fill="black"
    />
  </svg>
);

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5a6.75 6.75 0 0 0 0-13.5M2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5"
      clipRule="evenodd"
    />
  </svg>
);

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.9511 2.92702C12.6521 2.00602 11.3491 2.00602 11.0491 2.92702L9.5301 7.60102C9.46467 7.80167 9.33744 7.97648 9.16662 8.10042C8.9958 8.22436 8.79014 8.29107 8.5791 8.29102H3.6651C2.6971 8.29102 2.2931 9.53102 3.0771 10.101L7.0531 12.989C7.22389 13.1132 7.351 13.2882 7.4162 13.4891C7.48141 13.6899 7.48137 13.9062 7.4161 14.107L5.8981 18.781C5.5981 19.702 6.6531 20.469 7.4361 19.899L11.4121 17.011C11.583 16.8868 11.7888 16.8199 12.0001 16.8199C12.2114 16.8199 12.4172 16.8868 12.5881 17.011L16.5641 19.899C17.3471 20.469 18.4021 19.703 18.1021 18.781L16.5841 14.107C16.5188 13.9062 16.5188 13.6899 16.584 13.4891C16.6492 13.2882 16.7763 13.1132 16.9471 12.989L20.9231 10.101C21.7061 9.53102 21.3041 8.29102 20.3351 8.29102H15.4201C15.2092 8.29086 15.0038 8.22405 14.8332 8.10012C14.6625 7.9762 14.5355 7.80151 14.4701 7.60102L12.9511 2.92702Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <g id="clock">
      <path
        d="M12 8V12L15 15M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="M6 6L18 18M6 18L18 6L6 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const TimeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <g id="Time">
      <circle
        id="Ellipse 54"
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        id="Vector 64"
        d="M16.5 12H12.25C12.1119 12 12 11.8881 12 11.75V8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const MapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <g id="Map">
      <path
        id="Vector 326"
        d="M21 16.6953V5.66466C21 5.34631 20.6785 5.12861 20.3829 5.24685L16.1351 6.94596C16.0473 6.98109 15.9506 6.98765 15.8588 6.96471L8.14116 5.03529C8.04939 5.01235 7.95273 5.01891 7.8649 5.05404L3.28287 6.88685C3.11203 6.95519 3 7.12066 3 7.30466V18.3353C3 18.6537 3.32154 18.8714 3.61713 18.7531L7.8649 17.054C7.95273 17.0189 8.04939 17.0123 8.14117 17.0353L15.8588 18.9647C15.9506 18.9877 16.0473 18.9811 16.1351 18.946L20.7171 17.1131C20.888 17.0448 21 16.8793 21 16.6953Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        id="Vector 327"
        d="M16 19V7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        id="Vector 328"
        d="M8 17L8 5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </g>
  </svg>
);

const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <g>
      <path
        id="Vector"
        d="M15 19L8 12L15 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const LocationMarkerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <g>
      <path
        d="M17.657 16.657L13.414 20.9C13.2284 21.0857 13.0081 21.233 12.7656 21.3336C12.523 21.4341 12.2631 21.4859 12.0005 21.4859C11.738 21.4859 11.478 21.4341 11.2354 21.3336C10.9929 21.233 10.7726 21.0857 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657V16.657Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export {
  ShowIcon,
  HideIcon,
  CheckIcon,
  LogoWhite,
  LogoBlack,
  SearchIcon,
  StarIcon,
  ClockIcon,
  XIcon,
  TimeIcon,
  MapIcon,
  ChevronLeftIcon,
  LocationMarkerIcon,
};
