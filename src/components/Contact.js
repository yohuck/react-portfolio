let emailValue = ''

const sectionStyles = {
    flexDirection: 'column',
}
const formStyles = {
    display: 'grid',
    padding: 'var(--size-4)',
    backgroundColor: '',
    margin: 'var(--size-1)'
}

const buttonStyles = {
    fontSize: 'var(--font-size-3)',
    paddingInline: 'var(--size-5)',
    paddingBlock: 'var(--size-3)',
    borderRadius: 'var(--radius-2)',
    boxShadow: 'var(--shadow-2)',
    userSelect: 'none',
    background: 'var(--violet-7)',
    fontWeight: 'var(--font-weight-7)',
    color: 'white',
    textAlign: 'center'
}
const Contact = () => {
    return (
        <section className="contact" style={sectionStyles}>
            <h1>Let's Chat</h1>
            <form style={formStyles}>
                <label for="email">Email Address:</label>
                <input name="email" id="email" type="email" value={emailValue}></input>
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" columns="40"></textarea>
                <button type="submit" style={buttonStyles}>Send</button>
            </form>
        </section>
    )
}

export default Contact