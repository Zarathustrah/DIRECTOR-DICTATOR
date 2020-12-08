# DIRECTOR-DICTATOR

# Summary

* Two-day group hackathon to create and deploy a single-page front-end React app based on external APIs. Built with superstars [Siu Kei Tam](https://github.com/tams2429) and [Dan Irons](https://github.com/dnirns)

* Click here [to view](https://director-dictator.netlify.app/)

<hr style="2px solid gray"> </hr>

# Technologies

* React
* JavaScript
* CSS
* HTML
* Insomnia 
* Git
* GitHub

<hr style="2px solid gray"> </hr>

# The App

* As a group, we devised the concept of an app (somewhat comically) to help indecisive people with chosing a film to watch. 

* The app uses APIs from [Open Movie Database](https://www.omdbapi.com/) and [IMDB](https://www.imdb.com/) to randomly generate a film title and display information about it. If the user isn't tempted, they can opt for another suggestion.  

* In support of all those who struggle with making a decision, the app limits you to five choices. If you still can't make up your mind, well, it's not called Director Dictator for nothing...

<hr style="2px solid gray"> </hr>

# Planning

* Given the time constraint, we opted to develop and code the logic as a group through VSCode Live Share. We then assigned styling tasks between the three of us. 

* Setting a goal for MVP: We began by deciding on the exact functionality of the app:
  * Making a successful HTTP Get Request (axios) to the OMDB API to display a movie title and title information to the user.
  * Designing the functionality to allow the user to generate another title.
  * Wireframing the 'pages'(home page, movie show page, 404, novelty page).  

* Siu Kei took on the task of typing the code, while Dan and I helped to figure out the logic. 


<hr style="2px solid gray"> </hr>

# Development Process

* The success of the app hinged on being able to identify and pull the right data from the API. This required combining two processes: we had to pair the request to OMDB with an id from IMDB to match the movie title with the specific data about that title that we wanted to display (year of release, genre, IMDB rating, and poster art)

* To achieve random generation, we explored the IMDB api to find out how many titles it contained (over 9,000,000), created a random number between one and the highest index, and then appended this to the get request to the OMDB API:

```
 getRandomMovie = async () => {
    if (!this.state.moviesLeft) {
      this.props.history.push('/problempage')
      return 
    }
    const randomIndex = Math.floor(Math.random() * 9000000)
    this.setState( { movie: null } )
    try {
      // console.log('tt' + randomIndex)
      const res = await getMovie('tt' + randomIndex)

```

* Before writing any code, we manually tested the requests separately using [Insomnia](https://insomnia.rest/).

* We then coded the logic to make specific requests for the data we wanted. To do this we coded conditions that excluded titles that did not have the required data:

```
if (res.data.Response === 'True' && res.data.Type === 'movie' && res.data.Poster !== 'N/A') {
        // console.log('Its a movie', res.data.Title)
        const moviesLeft = this.state.moviesLeft - 1
        // console.log('Number of movies left:', moviesLeft)
        return this.setState( { movie: res.data, moviesLeft } )
      } 
      return this.getRandomMovie()
    } catch (error) {
      console.log('The error is', error)
    }

```
* Once we had achieved this, we were able to move on to the styling and building the UI.

<hr style="2px solid gray"> </hr>

# Architecture 

* The app is a simple site that uses React router to simulate four discrete pages.

* Navigation is determined by the choices input by the user, as opposed to a conventional navbar menu. 

<hr style="2px solid gray"> </hr>

# Challenges

* Unquestionably, the biggest challenge to making the app work was figuring out how to pair the two API requests and ensuring that the response data only returned movies (OMDB contains over 15 million titles, many of which are television shows). 

* Working remotely as a group of three took some time to adjust to, particularly as we were all learning as we went. It helped me to get into the mindset of verbalising my thinking process clearly and concisely, as well as encouraged me to be confident about putting forward suggestions.  

<hr style="2px solid gray"> </hr>

# Wins

* Getting the right Response data back from the OMDB API!!

* Achieving a functioning MVP within the deadline. 


<hr style="2px solid gray"> </hr>

# Future Improvements

* Finding a way to accelerate the search for random titles (possibly by requesting more specific data, even if it does not get displayed).

* Fix the audio bugs

