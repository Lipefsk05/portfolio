import "./Style.css"
import FadeContent from '@/components/fadecontent/FadeContent'


export default function FeedBacks() {
    return (
        <section className="feedbacks blur-background" id="feedbacks">
            <h2 className="title">FeedBacks</h2>
            <article className="comments">
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="person">
                    <h4 className="name">User 1</h4>
                    <hr className="divider" />
                    <h5 className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, at. Et recusandae obcaecati aut voluptates dignissimos. Perferendis tempora facere expedita pariatur, quia doloremque nam, id enim ducimus laboriosam hic rem.</h5>
                </FadeContent>
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="person">
                    <h4 className="name">User 2</h4>
                    <hr className="divider" />
                    <h5 className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, at. Et recusandae obcaecati aut voluptates dignissimos. Perferendis tempora facere expedita pariatur, quia doloremque nam, id enim ducimus laboriosam hic rem.</h5>
                </FadeContent>
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="person">
                    <h4 className="name">User 3</h4>
                    <hr className="divider" />
                    <h5 className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, at. Et recusandae obcaecati aut voluptates dignissimos. Perferendis tempora facere expedita pariatur, quia doloremque nam, id enim ducimus laboriosam hic rem.</h5>
                </FadeContent>
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="person">
                    <h4 className="name">User 4</h4>
                    <hr className="divider" />
                    <h5 className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, at. Et recusandae obcaecati aut voluptates dignissimos. Perferendis tempora facere expedita pariatur, quia doloremque nam, id enim ducimus laboriosam hic rem.</h5>
                </FadeContent>
                <FadeContent blur={true} easing="ease-out" initialOpacity={0} className="person">
                    <h4 className="name">User 5</h4>
                    <hr className="divider" />
                    <h5 className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, at. Et recusandae obcaecati aut voluptates dignissimos. Perferendis tempora facere expedita pariatur, quia doloremque nam, id enim ducimus laboriosam hic rem.</h5>
                </FadeContent>
            </article>
        </section>
    )
}