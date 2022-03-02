import stylegan from './images/stylegan2.png'
import disneyStylegan from './images/disney_stylegan.gif'
import cyclegan from './images/cycle_gans_art.png'
import ReactPlayer from 'react-player'

function Discover() {
    return (
        <div className='discover-page'>
            <h1 className='page-title'>Discover</h1>

            <div className='information-text-img-container'>
                <h1>Introduction</h1>
                <p>A Generative Adversarial Network, or GAN, is a type of neural network architecture for generative modeling.
                    Generative modeling involves using a model to generate new examples that plausibly come from an existing distribution of samples,
                    such as generating new photographs that are similar but specifically different from a dataset of existing photographs.
                    A GAN is a generative model that is trained using two neural network models. One model is called the “generator” or “generative network”
                    model that learns to generate new plausible samples. The other model is called the “discriminator” or “discriminative network”
                    and learns to differentiate generated examples from real examples.
                    The two models are set up in a contest or a game (in a game theory sense) where the generator model seeks to fool the discriminator model,
                    and the discriminator is provided with both examples of real and generated samples.
                    After training, the generative model can then be used to create new plausible samples on demand.
                </p>

                <h1>Artificial Intelligence in art</h1>
                <p>Artificial intelligence algorithms are now able to create art: draw paintings, compose music and video, write poems and lyrics. Artists will soon start collaborating with intelligent machines to welcome the new era of creativity.
                    There are some key components that will enhance such a collaboration in the future, which are analyzed below.</p>

                <h1>Generative models</h1>
                <p>Nothing has inspired the artificial art generation more than generative models. Such models are able of generating novel pieces of art by understanding the features and styles of existing artworks, but without explicitly copying them. A human cannot easily tell the difference between a successful, generated piece of art and a human - made one.
                    Generative Adversarial Networks (GANs) have made great advances in recent years by producing realistic results, such as human faces that do not exist in reality, using StyleGAN.</p>
                <img src={stylegan} className='image' alt="StyleGAN" />
                <div>
                    <a href='https://thispersondoesnotexist.com/'>https://thispersondoesnotexist.com/</a>
                </div>
                <p>Or maybe revive old photographs and portraits, and make Mona Lisa talk to us: </p>
                <ReactPlayer url='https://www.youtube.com/watch?v=P2uZF-5F1wI' />

                <p>Moreover, cycleGANs have the ability to transform images from one domain (say real scenery) to another domain (Monet paintings or Van Gogh). </p>
                <img src={cyclegan} className='image' alt="CycleGAN" />
                <div>
                    <a href='https://towardsdatascience.com/cyclegans-to-create-computer-generated-art-161082601709'>https://towardsdatascience.com/cyclegans-to-create-computer-generated-art-161082601709</a>
                </div>
                
                <h1>Animating Yourself as a Disney Character with AI</h1>
                <p>An interesting application has been created by Doron Adler based on StyleGAN2. The app generates Disney characters based on real faces.</p>
                <img src={disneyStylegan} className='image' alt="StyleGAN2" />
                <div>
                    <a href='https://towardsdatascience.com/animating-yourself-as-a-disney-character-with-ai-78af337d4081'>https://towardsdatascience.com/animating-yourself-as-a-disney-character-with-ai-78af337d4081</a>
                </div>

                <h1>Conclusion</h1>
                <p>By changing the input data we provide to a GAN we are opening a world of new possibilities in art creation. We can guide our GAN towards a certain direction, and teach it to draw like Picaso or Monet, producing drawings that could have been created by a famous artist or synthesize songs like Bach. Also, GANs offer the capability of mapping input information to another type of information and so it is now possible to generate images or videos based on a music sample or a text description.</p>
            </div>
        </div>
    )
}

export default Discover
