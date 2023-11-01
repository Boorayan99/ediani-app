import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";

const BlogPost = () => {
  return (
    <>
      <Meta title={"'Dynamic'Blog Post"} />
      <BreadCrumb title="'Dynamic'Blog Post" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="blog-post-card">
              <Link to="/blog" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" /> Back to Blogs
              </Link>
              <h3 className="title">A Beautiful WTF</h3>
              <img
                src="images/blog-3.webp"
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p>
                You're only as good as your last collection, which is an
                enormous pressure. I think there is something about luxury
                asnsdnkjlnfdkj \sdjvkbjkvdbjsdfkbjsdvf sgbriwbriubiwurgbiubgrw
                wrbwribirbisbvibiuvf wgvbijsbvijbiwabab;a aeibiearbiegbierbgbgre
                ergubreigbrweibgiwrabibe eagbieabgaebiubeg eaigbiearbgierug
                ergib ergberbgirgbirbgibgubrgibrigb rbgirbgiebrgiubegrh
                erigbierbgiergb rgigrbfbghbdfbhfdgbdhdbfdhgh efgvrgerbgiebgierg
                ergieirgbeieg iergi ergberbgegbrergbfbefberf ergibgeribgeiber
                ergiberbgierbgierg ergibe ergergb erigbibier giergbiebrg
                iergiuerig iergbiergiieg ierbgibergibgr ergbeirbgibeirbg
                eigbeibig iergbirgbierg iergieribeg ergibegbeig iergb
                ergbbuiergiberg ergbbieg eirbgbi eigbiuberg iegbieribeigr
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogPost;
