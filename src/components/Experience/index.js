import React from 'react';

import './experience.scss';
import { WorkRounded, SchoolRounded } from '@material-ui/icons';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import {
  dataTimeline,
} from 'src/data/dataTimeline';

export default function Experience() {
  const workIconStyles = { background: '#FFE0B5', color: '#fff' };
  const schoolIconStyles = { background: '#D0F1BF', color: '#fff' };

  return (
    <div id="experiences">
      <h1>Expérience professionnelle et éducation</h1>
      <div className="container">
        <VerticalTimeline>
          {dataTimeline.map((element) => {
            const isWorkIcon = element.icon === 'work';
            const showButton = element.buttonText !== undefined;

            return (
              <VerticalTimelineElement
                key={element.key}
                className="vertical-timeline-element--education"
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkRounded /> : <SchoolRounded />}

              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h4>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    className="link-button"
                    href={element.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}
