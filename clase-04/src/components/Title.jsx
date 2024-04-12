

const Title = ({title, size}) => {

    const styles = {
        color: '#777',
        fontSize: '12px'
    }

    if(size === 'sm'){
        styles.fontSize = '14px'
    }else if (size === 'md'){
        styles.fontSize = '18px'
    }else if(size === 'lg'){
        styles.fontSize = '24px'
    }

    return (
        <h1 style={styles}>{title}</h1>
    )
}

export default Title;