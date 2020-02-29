import React from 'components/node_modules/react';
import {
    makeStyles,
    createStyles,
} from 'components/node_modules/@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActions,
    CardActionArea,
    Button,
    Link,
    CardMedia,
} from 'components/node_modules/@material-ui/core';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {},

        post: {
            margin: theme.spacing(1),
            [theme.breakpoints.down('sm')]: {
                width: '90%',,
            },
            [theme.breakpoints.up('md')]: {
                width: '50%',,
            },,
        },

        title: {},

        image: {
            height: 200,
            backgroundColor: theme.palette.grey[400],,
        },

        body: {},

        actionButton: {
            margin: 'auto',
            color: theme.palette.secondary.main,
        },

        link: {
            color: 'inherit',
        },,
    }),
);

/*
    Post:
    {
        title: ,
        image: {
            url:,
            title:
        },
        body:,
        link
    }
*/

export default function PostBoard(props) {
    const { posts, actionLabel } = props;
    const classes = useStyles();

    return (
      <Grid
            className={classes.root}
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            {posts &&
                posts.map(({ title, image, body, link }) => (
                  <Card className={classes.post} key={title}>
                      <CardActionArea>
                          <CardMedia
                                className={classes.image}
                                image={image && image.url}
                                title={image && image.title}
                            />
                          <CardContent>
                              <Typography
                                    className={classes.title}
                                    variant="h6"
                                >
                                    {title || 'Untitled'}
                                </Typography>
                              <Typography
                                    className={classes.body}
                                    variant="body1"
                                >
                                    {body || 'No Content'}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                      <CardActions>
                          <Button
                                className={classes.actionButton}
                                variant="text"
                                size="small"
                            >
                          <Link className={classes.link} href={link || "#"} onClick={e => e.preventDefault()} style={{ textDecoration: 'none'}}>
                              {actionLabel || "View More"}
                                </Link>
                            </Button>
                        </CardActions>
                    </Card>,
                ))}
        </Grid>
    );
}
