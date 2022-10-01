import React, { useEffect, useRef } from 'react';
import styles from '../../styles/components/projects/ProjectLocationMap.module.scss';
import { ProjectStatus } from '../../constants';

interface ProjectLocationMapProps {
  address: string;
  project_status: ProjectStatus;
}

const ProjectLocationMap = ({
  address,
  project_status,
}: ProjectLocationMapProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const { kakao }: any = window;
    if (kakao) {
      kakao.maps.load(() => {
        const mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3,
        };
        const map = new kakao.maps.Map(ref.current, mapOption);

        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, function (result: any, status: any) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            if (project_status === ProjectStatus.Before) {
              const circle = new kakao.maps.Circle({
                center: coords,
                radius: 100,
                strokeWeight: 5,
                strokeColor: '#75B8FA',
                strokeOpacity: 1,
                strokeStyle: 'solid',
                fillColor: '#F9F9F9',
                fillOpacity: 0.5,
              });

              circle.setMap(map);
              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            } else if (project_status === ProjectStatus.FUNDING_PROGRESS) {
              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              var infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${address}</div>`,
              });
              infowindow.open(map, marker);
            }

            map.setCenter(coords);
          }
        });
      });
    }
  }, [ref, window]);
  return (
    <div>
      <div ref={ref} className={styles.map}></div>
    </div>
  );
};

export default ProjectLocationMap;
