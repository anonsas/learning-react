import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className="app__social">
      <a href="https://github.com/anonsas" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/lukjanov93" target="_blank">
        <BsInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/igor-lukjanov-960309195/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
  );
}

export default SocialMedia;
