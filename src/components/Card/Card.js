import React from 'react'
import Wrapper from './Wrapper'
import styles from './Card.module.css'

/**
 * <Card>
 *   <Card.Image src={imageSource}/>
 *   <Card.Header>{title}</Card.Header>
 *   <Card.Text>{text}</Card.Text>
 * </Card>
 */

class Card extends React.Component {
  static Image = ({src, ...rest}) => (
    <img src={src} className={styles.image} {...rest} />
  )

  static Header = ({children, ...rest}) => (
    <h2 className={styles.header}>{children}</h2>
  )

  static SubText = ({children, ...rest}) => (
    <small className={styles.subtext}>{children}</small>
  )

  static Paragraph = ({children, ...rest}) => (
    <p className={styles.paragraph} {...rest}>
      {children}
    </p>
  )

  static Flex = ({children, ...rest}) => (
    <div className={styles.flex}>{children}</div>
  )

  static FlexCol = ({children, ...rest}) => (
    <div className={styles.flexCol}>{children}</div>
  )

  render() {
    return (
      <Wrapper>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child),
        )}
      </Wrapper>
    )
  }
}

export default Card
