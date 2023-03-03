import React from "react";

export default function LeftNavigationSnippet({textColor}){
    return (
        <svg className={`${textColor} w-6 h-6`}
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4749 3.59998L7.60404 11.967H3.59998L7.46432 3.59998H11.4749Z" fill="currentColor"/>
            <path d="M11.721 11.967L7.8566 20.3342H3.84607L7.70969 11.967H11.721Z" fill="currentColor"/>
            <path d="M18.2876 5.44626L13.3321 5.43417L13.043 4.35541L17.9986 4.36749L18.2876 5.44626Z" fill="currentColor"/>
            <path d="M20.7429 8.27913L12.0101 8.26706L11.721 7.18829L20.4539 7.20036L20.7429 8.27913Z" fill="currentColor"/>
            <path d="M19.4208 11.112L10.688 11.0999L10.3989 10.0211L19.1317 10.0332L19.4208 11.112Z" fill="currentColor"/>
        </svg>
    )
}