import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContexts'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://scontent.fbau2-1.fna.fbcdn.net/v/t1.0-9/28168205_1588393977862447_5144574564373259435_n.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_ohc=87MGFg9FQxcAX_TKxhG&_nc_ht=scontent.fbau2-1.fna&oh=ade75bfdc389e56524f010fac063f25c&oe=605A070D" alt="Foto de Perfil"/>
            <div>
                <strong>José Guilherme</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}