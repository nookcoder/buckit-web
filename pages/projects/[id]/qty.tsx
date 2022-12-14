import React, { useEffect, useState } from 'react';
import styles from '../../../styles/pages/ProjectQty.module.scss';
import KeyPad from '../../../components/common/key-pad/key_pad';
import AppBarWithBackArrow from '../../../components/nav/app_bar_with_back_arrow';
import Image from 'next/image';
import marketImage from '../../../public/assets/buy.png';
import { CircularProgress, TextField } from '@mui/material';
import ProductViewModel from '../../../models/view-model/project';
import FullWidthButton from '../../../components/common/buttons/full_width_button';
import { useRouter } from 'next/router';
import ProjectViewModel from '../../../models/view-model/project';
import { getProjectById } from '../../../api';
import { ProjectModel } from '../../../models/model/project';
import AlertModal from '../../../components/common/modal/alert-modal';
import { useRecoilState } from 'recoil';
import { currentProjectIdAtom, orderAtom } from '../../../recoil';

const Qty = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [errorModal, setErrorModal] = useState(false);
  const [qtyModal, setQtyModal] = useState(false);
  const [projectViewModel, setProjectViewModel] = useState<ProjectViewModel>();
  const [currentProjectId, setCurrentProjectId] =
    useRecoilState(currentProjectIdAtom);
  const [orderInput, setOrderInput] = useRecoilState(orderAtom);
  const [qty, setQty] = useState<string>('0');

  const init = async (projectId: string) => {
    if (projectId === '0') {
      setErrorModal(true);
      return router.push('/projects');
    }

    const project = await getProjectById(+projectId);
    if (project) {
      const projectModel = new ProjectModel(project);
      setProjectViewModel(new ProjectViewModel(projectModel));
    }
  };

  const onClick = () => {
    if (qty === '0') {
      setQtyModal(true);
    }

    setOrderInput({
      ...orderInput,
      quarter_qty: qty,
    });
    return router.push(`/projects/${currentProjectId}/check`);
  };

  useEffect(() => {
    if (isLoading) {
      const projectId = router.query['id'] ?? '0';
      setCurrentProjectId(projectId);
      init(projectId.toString());
      setIsLoading(false);
    }
  }, []);

  return (
    <div>
      <AppBarWithBackArrow title={projectViewModel?.getAppTitle()} />
      {isLoading || projectViewModel === undefined ? (
        <CircularProgress />
      ) : (
        <main className={styles.container}>
          <div className={styles.header}>
            <div className={`${styles.align_center}`}>
              <Image
                src={marketImage}
                alt={'?????????'}
                width={78}
                height={78}
                layout={'fixed'}
                unoptimized={true}
              />
            </div>
            <div
              className={`${styles.align_center} ${styles.project_qty_info}`}
            >
              1?????? = {projectViewModel.getPricePerBlock()}???
            </div>
            <div
              className={`${styles.align_center} ${styles.project_qty_info}`}
            >
              1??? ?????? ?????? ?????? ?????? = 200???
            </div>
          </div>

          <div>
            <div className={`${styles.align_center}`}>
              ??? ????????? ??????????????????????
            </div>
            <div className={`${styles.align_center}`}>
              <TextField
                value={qty}
                sx={{ input: { textAlign: 'center' } }}
                color={'success'}
                disabled={false}
                variant={'standard'}
              />
            </div>
          </div>

          <footer className={styles.footer}>
            <KeyPad
              password={false}
              setQty={setQty}
              qty={qty}
              max_qty={projectViewModel
                .getAvailableBlockForPurchase()
                .toString()}
            />
            <div className={styles.button_container}>
              <FullWidthButton
                variant={'contained'}
                text_color={'white'}
                onClick={onClick}
              >
                ????????????
              </FullWidthButton>
            </div>
          </footer>

          <AlertModal
            title={'?????? ??????????????? ??????????????? ??????????????????'}
            open={errorModal}
            setOpen={setErrorModal}
          />

          <AlertModal
            title={'1??? ????????? ??????????????????'}
            open={qtyModal}
            setOpen={setQtyModal}
          />
        </main>
      )}
    </div>
  );
};

export default Qty;
