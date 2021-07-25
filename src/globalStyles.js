import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
    body {
        font-family: Raleway,sans-serif;
    }
    .container {
        margin:  0 24px;
    }
    @media(min-width: 768px) {
        .container {
            margin:  0 48px;
        }   
    }
    @media(min-width: 1024px) {
        .container {
            margin:  0 90px;
        }   
    }
    @media(min-width: 1200px) {
        .container {
            margin:  0 180px;
        }   
    }
    @media(min-width: 1440px) {
        .container {
            margin:  0 calc((100% - 1080px) / 2);
        }   
    }
`;
 
export default GlobalStyle;