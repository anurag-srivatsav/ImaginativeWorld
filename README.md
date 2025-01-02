<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mysteries Unfolded</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: #f5f5f5;
        }

        .hero {
            background: linear-gradient(135deg, #6c63ff, #3b3a99);
            color: #ffcc00;
            text-align: center;
            padding: 60px 0;
        }

        .hero h1 {
            font-family: 'Georgia', serif;
            font-size: 3em;
            letter-spacing: 2px;
        }

        .typewriter {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            width: 0;
            animation: typing 3s steps(30) 1s forwards, blink 0.75s step-end infinite;
        }

        @keyframes typing {
            to {
                width: 100%;
            }
        }

        @keyframes blink {
            50% {
                border-color: transparent;
            }
        }

        .section-title {
            font-size: 2em;
            color: #333;
            margin-top: 40px;
            margin-bottom: 20px;
            text-align: center;
        }

        .section-content {
            font-size: 1.2em;
            color: #555;
            line-height: 1.6;
        }

        .img-fluid {
            margin-bottom: 20px;
        }

        .blockquote {
            background: #f9f9f9;
            padding: 1rem;
            border-left: 5px solid #ff758c;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>

    <!-- Hero Section with Typewriter Effect -->
    <section class="hero">
        <h1>Welcome to <span class="typewriter" id="dynamic-text"></span></h1>
    </section>

    <!-- Story Section -->
    <section class="container pb-4">
        <h2 class="section-title">Stories</h2>
        <div class="section-content">
            <p>Explore intriguing stories that captivate your attention and engage your mind. Here, you'll find stories
                that are filled with mystery, adventure, and moments that will leave you thinking.</p>
            <div class="row">
                <div class="col-md-4">
                    <img src="your-image-1.jpg" class="img-fluid" alt="Image 1">
                </div>
                <div class="col-md-4">
                    <img src="your-image-2.jpg" class="img-fluid" alt="Image 2">
                </div>
                <div class="col-md-4">
                    <img src="your-image-3.jpg" class="img-fluid" alt="Image 3">
                </div>
            </div>
        </div>
    </section>

    <!-- Mystic Quotes Section -->
    <section class="container pb-4">
        <h2 class="section-title">Mystic Quotes</h2>
        <div class="section-content">
            <blockquote>
                "The universe is but a mirror to our consciousness." - Author
            </blockquote>
            <blockquote>
                "Time is a loop, and we are all players in it." - Author
            </blockquote>
        </div>
    </section>

    <!-- About Section -->
    <section class="container pb-4">
        <h2 class="section-title">About</h2>
        <div class="section-content">
            <p>The **Mysteries Unfolded** is a journey into the unknown, where every twist and turn leads to new
                discoveries. Join us as we venture into the infinite possibilities of time, space, and consciousness.
            </p>
            <p>We aim to bring you stories and quotes that inspire, challenge, and make you ponder the mysteries of the
                world.</p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="text-center py-4">
        <p>&copy; 2025 Mysteries Unfolded. All Rights Reserved.</p>
    </footer>

    <!-- Bootstrap JS and Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const dynamicText = document.getElementById('dynamic-text');
            const text = "Mysteries Unfolded"; // Text to type out
            let i = 0;

            function typeWriter() {
                if (i < text.length) {
                    dynamicText.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100); // Adjust typing speed here
                }
            }
            typeWriter();
        });
    </script>

</body>

</html>
