/**
 * when you need client components in here, make those the child elements. import them into here.
 * the parent must be server.
 */

import Image from "next/image";
import Link from "next/link";


export default function FrameButtons() {

    return (
        <div className="pv-frame--buttons">
            <div className="pv-frame--btn">
                <a className="btn-icon flex flex-col" href="mailto:hollymphillips.dev@gmail.com">
                    <div>
                        <img className="img" src="/button-icons/dev-btn_email.png" alt="" width="48" height="27" />
                        <img className="img-hover" src="/button-icons/dev-btn_email-hover.png" alt="" width="52" height="27" />
                    </div>
                    <span className="text-white text-sm mt-[3px] mb-0 leading-none">Email<span className="sr-only"> Holly Phillips</span></span>
                </a>
            </div>

            <div className="pv-frame--btn">
                <a className="btn-icon flex flex-col" href="tel:+19364251225">
                    <div>
                        <img className="img" src="/button-icons/dev-btn_phone.png" alt="" width="35" height="34" />
                        <img className="img-hover" src="/button-icons/dev-btn_phone-hover.png" alt="" width="35" height="34" />
                    </div>
                    <span className="text-white text-sm mt-[3px] mb-0 leading-none">Call<span className="sr-only"> Holly Phillips</span></span>
                </a>
            </div>

            <div className="pv-frame--btn">
                <a className="btn-icon flex flex-col" href="https://github.com/hooleymcknight" target="_blank" rel="noopener noreferrer">
                    <div>
                        <img className="img" src="/button-icons/dev-btn_github.png" alt="" width="35" height="29" />
                        <img className="img-hover" src="/button-icons/dev-btn_github-hover.png" alt="" width="54" height="28" />
                    </div>
                    <span className="text-white text-sm mt-[3px] mb-0 leading-none">GitHub<span className="sr-only"> (opens in new tab)</span></span>
                </a>
            </div>

            <div className="pv-frame--btn">
                <a className="btn-icon flex flex-col" href="https://linkedin.com/in/hooleymcknight" target="_blank" rel="noopener noreferrer">
                    <div>
                        <img className="img" src="/button-icons/dev-btn_linkedin.png" alt="" width="42" height="32" style={{ marginTop: '-2px' }} />
                        <img className="img-hover" src="/button-icons/dev-btn_linkedin-hover.png" alt="" width="42" height="32" style={{ marginTop: '-2px' }} />
                    </div>
                    <span className="text-white text-sm mt-[3px] mb-0 leading-none">LinkedIn<span className="sr-only"> (opens in new tab)</span></span>
                </a>
            </div>
        </div>
    );
}