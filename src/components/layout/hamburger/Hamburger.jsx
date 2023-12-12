import styles from './hamburger.module.scss'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import Menu from './Menu'
import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose /> : <CgMenuRight />}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Hamburger
