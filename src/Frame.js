import React from 'react'
import styles from './Frame.module.css'

const Frame = (props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['frame']}>
                <div className={styles['frame7']}>
                    <div className={styles['frame8']}>
                        <span className={styles['text']}>
                            <span>帳號:</span>
                        </span>
                    </div>
                    <div className={styles['frame9']}>
                        <span className={styles['text02']}>
                            <span>
                                <span>密碼:</span>
                                <br></br>
                                <span></span>
                            </span>
                        </span>
                    </div>
                    <img
                        src="/playground_assets/image4032-2jzg-200h.png"
                        alt="IMAGE4032"
                        className={styles['image']}
                    />
                    <img
                        src="/playground_assets/image4032-2sql-200h.png"
                        alt="IMAGE4032"
                        className={styles['image1']}
                    />
                    <img
                        src="/playground_assets/image4032-wts-200h.png"
                        alt="IMAGE4032"
                        className={styles['image2']}
                    />
                    <div className={styles['component2']}>
                        <span className={styles['text07']}>
                            <span>登入</span>
                        </span>
                    </div>
                    <div className={styles['component3']}>
                        <span className={styles['text09']}>
                            <span>註冊</span>
                        </span>
                    </div>
                </div>
                <div className={styles['frame1']}>
                    <div className={styles['component21']}>
                        <span className={styles['text11']}>
                            <span>攝影平台</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frame
