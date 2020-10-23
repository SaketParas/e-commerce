import React, { Component } from 'react';
import { ButtonGroup, Button } from '@material-ui/core/';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import EcoIcon from '@material-ui/icons/Eco';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Alert from '@material-ui/lab/Alert';
import GitHubIcon from '@material-ui/icons/GitHub';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="container-fluid p-3 bg-dark">
                    <div class="row text-left text-light">
                        <div class="col-md-5">
                            <h5 class="font-weight-bolder ">Service <EcoIcon className="text-success" /></h5>
                            <p class="">Compare Values</p>
                            <ButtonGroup variant="text" aria-label="text light button group">
                                <Button className="text-light">News</Button>
                                <Button className="text-light">Feedback</Button>
                                <Button className="text-light">Values</Button>
                            </ButtonGroup>
                            <p class="pt-4 text-muted">Copyright @2019 All rights reserved || Template made by <span>Saket Paras</span></p>
                        </div>
                        <div class="col-md-5">
                            <h5 class="font-weight-bolder">NewsLetter <PeopleAltIcon className="text-danger" /></h5>
                            <p class="">Stay updated</p>
                            <ButtonGroup variant="text" color="" aria-label="text primary button group">
                                <Button className="text-light">Info</Button>
                                <Button className="text-light">Support</Button>
                                <Button className="text-light">Terms </Button>
                            </ButtonGroup>
                            <form class="form-inline mt-3">
                                <div class="col">
                                    <Alert variant="outlined" severity="success" className="text-light" data-placement="right" title="https://saketparas.github.io/">
                                    <a href="https://saketparas.github.io/" className="text-light">https://saketparas.github.io/</a> <GitHubIcon />
                                    </Alert>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-2 col-sm-12">
                            <h5 class="font-weight-bolder">Follow Us <DesktopWindowsIcon className="text-warning" /></h5>
                            <p class="">Let Us bs social</p>
                            <div class="column" data-placement="right" title="Social Media">
                                <FacebookIcon className="text-success" />
                                <TwitterIcon className="text-primary" />
                                <YouTubeIcon className="text-danger" />
                                <InstagramIcon className="text-warning" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer