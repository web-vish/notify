import React, { useState } from 'react'
import styles from './NotifyComponent.module.scss'
export default function NotifyComponent() {
    const [show, setShow] = useState(false);
    return (
        <div className={styles.notifyCntr}>
            <div className={styles.notifyTrigger} onClick={() => { setShow(!show) }}>&#128276;</div>
            {
                show && <section className={styles.notifyContent}>
                    <div>
                        Welcome to Notify App...
                    </div>
                    <div>
                        This is to notify you there is a new message.
                    </div>
                    <div>
                        This is to another notification for you.
                    </div>
                </section>
            }
        </div>
    )
}
